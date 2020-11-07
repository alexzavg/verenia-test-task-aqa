import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '@store/reducers';
import { Store } from '@ngrx/store';
import { catchError, debounceTime, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { GithubApi } from '@services/github-api/github.api';
import { of } from 'rxjs';
import { IRepoFilter, repoFilterId, IRepo } from './repositories.model';
import * as actionsList from './repositories.actions';
import * as selectors from './repositories.selectors';
import { serverErrorMessage } from '@core/consts';

@Injectable({providedIn: 'root'})
export class RepositoriesEffects {
  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private api: GithubApi
  ) {}

  @Effect({dispatch: false})
  setQuery$ = this.actions.pipe(
    ofType(actionsList.ActionTypes.SET_QUERY),
    map((action: any) => action.payload),
    filter((data: {id: repoFilterId, value: string}) => data.id === 'searchQuery'),
    debounceTime(1000),
    tap(() => this.store.dispatch(new actionsList.Load()))
  );

  @Effect()
  load$ = this.actions.pipe(
    ofType(actionsList.ActionTypes.LOAD_LIST),
    switchMap(() => this.store.select(selectors.getReposFilters).pipe(take(1))),
    map((filters: { [key: string]: IRepoFilter }) => filters.searchQuery.value),
    switchMap((searchQuery: string) => {
        if (!searchQuery) {
          return of(new actionsList.SetList([]));
        }
        return this.api.getRepos(searchQuery)
          .pipe(
            map((response: any) => {
              return response.items.map(item => {
                return {
                  id: item.id,
                  avatar: item.owner.avatar_url,
                  name: item.name,
                  stargazersCount: item.stargazers_count,
                  description: item.description,
                  url: item.html_url,
                  language: item.language
                } as IRepo;
              });
            }),
            map((repos: IRepo[]) => new actionsList.LoadSuccess(repos)),
            catchError(() => of(new actionsList.LoadFailed(serverErrorMessage)))
          );
      }
    )
  );

  @Effect()
  loadSuccess$ = this.actions.pipe(
    ofType(actionsList.ActionTypes.LOAD_LIST_SUCCESS),
    map((action: any) => action.payload),
    map((data: IRepo[]) => Array.from(new Set(data.map((repo) => repo.language))).filter(repo => repo)),
    map((data: string[]) => new actionsList.SetSuggestValue({id: 'language', value: data}))
  );
}
