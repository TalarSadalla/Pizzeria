import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkListItemComponent } from './drink-list-item.component';

describe('DrinkListItemComponent', () => {
  let component: DrinkListItemComponent;
  let fixture: ComponentFixture<DrinkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
