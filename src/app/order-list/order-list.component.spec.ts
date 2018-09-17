import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderListComponent} from './order-list.component';
import {OrderComponent} from '../order/order.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListComponent, OrderComponent],
      providers: [
        OrderService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  afterEach(() => {
    TestBed.resetTestingModule();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
