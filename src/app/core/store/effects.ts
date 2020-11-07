import { EffectsModule } from '@ngrx/effects';
import { RepositoriesEffects } from '@store/repositories/repositories.effects';

export const AppEffectsModules = EffectsModule.forRoot([
  RepositoriesEffects,
]);
