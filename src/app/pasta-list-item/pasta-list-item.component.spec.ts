import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaListItemComponent } from './pasta-list-item.component';

describe('PastaListItemComponent', () => {
  let component: PastaListItemComponent;
  let fixture: ComponentFixture<PastaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
