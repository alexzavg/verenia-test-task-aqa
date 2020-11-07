import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { IRepo, repoFilterId } from '@store/repositories';
import * as actions from '@store/repositories/repositories.actions';
import * as actionsFavorites from '@store/favorites/favorites.actions';

@Injectable()
export class RepositoriesFacade {
  constructor(
    private store: Store<AppState>,
  ) {}

  setQuery(data: { id: repoFilterId, value: string }) {
    this.store.dispatch(new actions.SetQuery(data));
  }

  addToFavorites(repo: IRepo) {
    this.store.dispatch(new actionsFavorites.AddRepo(repo));
  }

  removeFromFavorites(id: number) {
    this.store.dispatch(new actionsFavorites.RemoveRepo(id));
  }
}
