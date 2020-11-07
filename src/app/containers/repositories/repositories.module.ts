import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { RepositoriesRoutingModule } from './repositories-routing.module';
import { RepositoriesComponent } from './repositories.component';
import { RepositoriesFacade } from './repositories.facade';
import { RepositoriesFiltersComponent } from './repositories-filters/repositories-filters.component';

@NgModule({
  declarations: [
    RepositoriesFiltersComponent,
    RepositoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RepositoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [RepositoriesFacade]
})
export class RepositoriesModule { }
