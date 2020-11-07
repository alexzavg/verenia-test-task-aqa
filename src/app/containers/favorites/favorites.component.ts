import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import * as selectors from '@store/favorites/favorites.selectors';
import { IRepo } from '@store/repositories';
import { FavoritesFacade } from './favorites.facade';

@Component({
  selector: 'app-favorites',
  template: `
    <main>
      <app-repositories-list
        (addToFavorites)="addToFavorites($event)"
        (removeFromFavorites)="removeFromFavorites($event)"
        [list$]="favoriteRepos$"
        [favoriteMode]="true"
      ></app-repositories-list>
    </main>`,
})
export class FavoritesComponent {
  favoriteRepos$: Observable<IRepo[]> = this.store.select(selectors.getFavoriteRepos);
  constructor(
    private store: Store<AppState>,
    private facade: FavoritesFacade
  ) {}

  addToFavorites(repo: IRepo) {
    this.facade.addToFavorites(repo);
  }

  removeFromFavorites(id: number) {
    this.facade.removeFromFavorites(id);
  }
}
