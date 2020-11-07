import { NgModule } from '@angular/core';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { localStorageSync } from 'ngrx-store-localstorage';

export const localStorageReducerKeys = ['favorites'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: localStorageReducerKeys})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(
      reducers,
      {metaReducers}
    ),
  ],
})
export class CoreStoreModule {}
