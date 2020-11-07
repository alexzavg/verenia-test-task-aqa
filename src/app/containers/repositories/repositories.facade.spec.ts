import { TestBed } from '@angular/core/testing';

import { RepositoriesFacade } from './repositories.facade';

describe('FavoritesFacade', () => {
  let service: RepositoriesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
