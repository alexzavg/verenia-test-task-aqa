import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBtnComponent } from './favorite-btn.component';

describe('FavoriteBtnComponent', () => {
  let component: FavoriteBtnComponent;
  let fixture: ComponentFixture<FavoriteBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
