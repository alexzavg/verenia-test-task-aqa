import { ActionReducerMap } from '@ngrx/store';
import { initReposState, IReposState, repos } from './repositories/repositories.reducer';
import { IFavoritesState, initFavoritesState, favorites } from './favorites/favorites.reducer';

export interface AppState {
  repos: IReposState;
  favorites: IFavoritesState;
}

export const initialAppState: AppState = {
  repos: initReposState,
  favorites: initFavoritesState
};

export let reducers: ActionReducerMap<AppState> = {
  repos,
  favorites
};
