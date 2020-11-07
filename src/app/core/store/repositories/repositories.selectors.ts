import {AppState, initialAppState} from '../reducers';
import {createSelector} from '@ngrx/store';
import {IReposState} from './repositories.reducer';

export const getReposState = (state: AppState = initialAppState) => state.repos;

export const getReposFilters = createSelector(
  getReposState,
  (state: IReposState) => state.filters
);

export const getReposList = createSelector(
  getReposState,
  (state: IReposState) => state.list.data
);

export const getReposIsLoading = createSelector(
  getReposState,
  (state: IReposState) => state.list.isLoading
);

export const getReposError = createSelector(
  getReposState,
  (state: IReposState) => state.list.error
);
