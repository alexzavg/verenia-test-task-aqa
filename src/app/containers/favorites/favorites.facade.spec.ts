import { TestBed } from '@angular/core/testing';

import { FavoritesFacade } from './favorites.facade';

describe('FavoritesFacade', () => {
  let service: FavoritesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
