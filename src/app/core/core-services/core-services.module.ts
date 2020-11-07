import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubApi } from './github-api/github.api';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  providers: [GithubApi]
})
export class CoreServicesModule {}
