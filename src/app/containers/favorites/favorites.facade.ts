import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { IRepo } from '@store/repositories';
import * as actionsFavorites from '@store/favorites/favorites.actions';

@Injectable()
export class FavoritesFacade {
  constructor(
    private store: Store<AppState>,
  ) {}

  addToFavorites(repo: IRepo) {
    this.store.dispatch(new actionsFavorites.AddRepo(repo));
  }

  removeFromFavorites(id: number) {
    this.store.dispatch(new actionsFavorites.RemoveRepo(id));
  }
}
