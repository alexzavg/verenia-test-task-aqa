import * as actions from './favorites.actions';
import { IRepo } from '@store/repositories';

export interface IFavoritesState {
  repoList: IRepo[];
}

export const initFavoritesState = JSON.parse(localStorage.getItem('favorites')) || {
  repoList: [],
};

export function favorites(
  state: IFavoritesState = initFavoritesState,
  action: { type: string, payload?: any }
): IFavoritesState {
  switch (action.type) {
    case actions.ActionTypes.ADD_REPO:
      return {...state, repoList: [action.payload, ...state.repoList]};

    case actions.ActionTypes.REMOVE_REPO:
      return {...state, repoList: state.repoList.filter(item => item.id !== action.payload)} as IFavoritesState;

    default: return state;
  }
}
