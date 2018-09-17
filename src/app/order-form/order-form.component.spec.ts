import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderFormComponent} from './order-form.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderComponent} from '../order/order.component';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFormComponent, OrderComponent],
      providers: [
        HttpClient,
        HttpHandler,
        OrderService
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
