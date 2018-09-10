import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormConfirmationComponent } from './order-form-confirmation.component';

describe('OrderFormConfirmationComponent', () => {
  let component: OrderFormConfirmationComponent;
  let fixture: ComponentFixture<OrderFormConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
