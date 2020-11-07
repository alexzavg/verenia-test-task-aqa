import { Action } from '@ngrx/store';
import { IRepo, repoFilterId } from './repositories.model';

export enum ActionTypes {
  LOAD_LIST = '[Repo] LOAD_LIST',
  LOAD_LIST_SUCCESS = '[Repo] LOAD_LIST_SUCCESS',
  LOAD_LIST_FAILED = '[Repo] LOAD_LIST_FAILED',
  SET_LIST = '[Repo] SET_LIST',
  SET_SUGGEST_VALUE = '[Repo] SET_SUGGEST_VALUE',
  SET_QUERY = '[Repo] SET_QUERY',
}

export class Load implements Action {
  public type = ActionTypes.LOAD_LIST;
}

export class LoadSuccess implements Action {
  public type = ActionTypes.LOAD_LIST_SUCCESS;
  constructor(public payload: IRepo[]) {}
}

export class LoadFailed implements Action {
  public type = ActionTypes.LOAD_LIST_FAILED;
  constructor(public payload: string) {}
}

export class SetList implements Action {
  public type = ActionTypes.SET_LIST;
  constructor(public payload: IRepo[]) {}
}

export class SetSuggestValue implements Action {
  public type = ActionTypes.SET_SUGGEST_VALUE;
  constructor(public payload: {id: repoFilterId, value: string[]}) {}
}

export class SetQuery implements Action {
  public type = ActionTypes.SET_QUERY;
  constructor(public payload: {id: repoFilterId, value: string}) {}
}
