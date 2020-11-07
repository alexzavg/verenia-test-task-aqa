import { initRepoFilters, initRepoList, IRepoFilter, IRepoList } from './repositories.model';
import * as actions from './repositories.actions';
import { AppUtils } from '@shared/utils';

export interface IReposState {
  filters: {[key: string]: IRepoFilter};
  list: IRepoList;
}

export const initReposState = {
  filters: initRepoFilters,
  list: initRepoList
};

export function repos(
  state: IReposState = initReposState,
  action: { type: string, payload?: any }
): IReposState {
  switch (action.type) {
    case actions.ActionTypes.LOAD_LIST:
      return {...state, list: {...state.list, isLoading: true}} as IReposState;

    case actions.ActionTypes.LOAD_LIST_SUCCESS:
      return {...state, list: {isLoading: false, data: action.payload, error: null}} as IReposState;

    case actions.ActionTypes.LOAD_LIST_FAILED:
      return {...state, list: {isLoading: false, data: [], error: action.payload}} as IReposState;

    case actions.ActionTypes.SET_SUGGEST_VALUE: {
      const f = state.filters;
      f[action.payload.id].suggestValue = action.payload.value;
      return {...state, filters: f} as IReposState;
    }

    case actions.ActionTypes.SET_LIST:
      return {...state, list: {error: null, isLoading: false, data: action.payload}} as IReposState;

    case actions.ActionTypes.SET_QUERY: {
      let f = AppUtils.deepClone(state.filters);
      if (action.payload.id === 'searchQuery') {
        f = AppUtils.deepClone(initRepoFilters);
      }
      f[action.payload.id].value = action.payload.value;
      return {...state, filters: f} as IReposState;
    }

    default: return state;
  }
}
