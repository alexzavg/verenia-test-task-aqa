import { AppState, initialAppState } from '@core/store/reducers';
import { createSelector } from '@ngrx/store';
import { IFavoritesState } from './favorites.reducer';

export const getState = (state: AppState = initialAppState) => state.favorites;

export const getFavoriteRepos = createSelector(
  getState,
  (state: IFavoritesState) => state.repoList
);
