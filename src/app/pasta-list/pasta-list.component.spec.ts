import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaListComponent } from './pasta-list.component';

describe('PastaListComponent', () => {
  let component: PastaListComponent;
  let fixture: ComponentFixture<PastaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
