import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {ShoppingBasketDetailComponent} from './shopping-basket-detail.component';
import {OrderService} from '../services/order.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {of} from 'rxjs';

describe('OrderDetailComponent', () => {
  let component: ShoppingBasketDetailComponent;
  let fixture: ComponentFixture<ShoppingBasketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingBasketDetailComponent],
      providers: [
        HttpClient,
        HttpHandler,
        OrderService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get order size', inject([OrderService], (service: OrderService) => {
    // Given
    const orderService = TestBed.get(OrderService);
    const getOrderSizeSpy = spyOn(orderService, 'getOrderSize').and.returnValue(of(2));

    // When
    component.getOrderSize();

    // Then
    expect(getOrderSizeSpy).toHaveBeenCalled();

  }));


  it('should get orders list', inject([OrderService], (service: OrderService) => {
    // Given
    const orderService = TestBed.get(OrderService);
    const getOrderListSpy = spyOn(orderService, 'getOrdersList').and.returnValue(of(2));

    // When
    component.getOrders();

    // Then
    expect(getOrderListSpy).toHaveBeenCalled();

  }));



  it('should get order price', inject([OrderService], (service: OrderService) => {
    // Given
    const orderService = TestBed.get(OrderService);
    const getOrderPriceSpy = spyOn(orderService, 'getOrderPrice').and.returnValue(of(2));

    // When
    component.getOrderPrice();

    // Then
    expect(getOrderPriceSpy).toHaveBeenCalled();

  }));


});
