import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreServicesModule } from '@services/core-services.module';
import { throwIfAlreadyLoaded } from '@core/module-imports';
import { CoreStoreModule } from '@store/core-store.module';
import { AppEffectsModules } from '@store/effects';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CoreStoreModule,
    AppEffectsModules,
    CoreServicesModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CoreStoreModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
