import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesFiltersComponent } from './repositories-filters.component';

describe('RepositoriesFiltersComponent', () => {
  let component: RepositoriesFiltersComponent;
  let fixture: ComponentFixture<RepositoriesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
