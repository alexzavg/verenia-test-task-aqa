import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { sharedComponents } from './components';
import { sharedPipes } from './pipes';

@NgModule({
  declarations: [
    ...sharedComponents,
    ...sharedPipes,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ...sharedComponents,
    ...sharedPipes,
  ],
})
export class SharedModule { }
