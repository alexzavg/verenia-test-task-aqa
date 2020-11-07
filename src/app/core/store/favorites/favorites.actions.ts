import { Action } from '@ngrx/store';
import { IRepo } from '@store/repositories';

export enum ActionTypes {
  ADD_REPO = '[Favorites] ADD_REPO',
  REMOVE_REPO = '[Favorites] REMOVE_REPO',
}

export class AddRepo implements Action {
  public type = ActionTypes.ADD_REPO;
  constructor(public payload: IRepo) {
    console.log('add', payload);
  }
}

export class RemoveRepo implements Action {
  public type = ActionTypes.REMOVE_REPO;
  constructor(public payload: number) {
    console.log('remove', payload);
  }
}
