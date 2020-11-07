import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesGuard } from '@containers/favorites/favorites.guard';

const routes: Routes = [
  {
    path: 'favorites',
    canLoad: [FavoritesGuard],
    loadChildren: () => import('./containers/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: '',
    loadChildren: () => import('./containers/repositories/repositories.module').then(m => m.RepositoriesModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
