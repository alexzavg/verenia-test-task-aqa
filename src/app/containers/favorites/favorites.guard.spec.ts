import { TestBed } from '@angular/core/testing';

import { FavoritesGuard } from './favorites.guard';

describe('FavoritesGuard', () => {
  let guard: FavoritesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FavoritesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
