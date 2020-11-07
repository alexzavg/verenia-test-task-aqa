import { Component } from '@angular/core';
import { IRepo, IRepoFilter, repoFilterId } from '../../core/store/repositories/repositories.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import * as selectors from '@store/repositories/repositories.selectors';
import * as selectorsFavorites from '@store/favorites/favorites.selectors';
import { RepositoriesFacade } from './repositories.facade';
import { selectFilterMessage } from '@core/consts';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent {
  filters$: Observable<{[key: string]: IRepoFilter}> = this.store.select(selectors.getReposFilters);
  list$: Observable<IRepo[]> = this.store.select(selectors.getReposList);
  isLoading$: Observable<boolean> = this.store.select(selectors.getReposIsLoading);
  error$: Observable<string> = this.store.select(selectors.getReposError);
  favoriteRepos$: Observable<IRepo[]> = this.store.select(selectorsFavorites.getFavoriteRepos);
  readonly emptyMessage = selectFilterMessage;

  constructor(
    private store: Store<AppState>,
    private facade: RepositoriesFacade
  ) {}

  addToFavorites(repo: IRepo) {
    this.facade.addToFavorites(repo);
  }

  removeFromFavorites(id: number) {
    this.facade.removeFromFavorites(id);
  }

  setQuery(data: {id: repoFilterId, value: string}) {
    this.facade.setQuery(data);
  }
}
