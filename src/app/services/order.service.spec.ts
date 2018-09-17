import {TestBed, inject} from '@angular/core/testing';

import {OrderService} from './order.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Dishes} from '../models/dishes.model';
import {Orders} from '../models/orders.model';

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        OrderService
      ]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('should add dish to order', inject([OrderService], (orderService: OrderService) => {
    // Given
    const dish = <Dishes> {};

    // When
    orderService.add(dish);

    // Then
    expect(orderService.orders.length).toBe(1);
  }));

  it('should return order list length', inject([OrderService], (orderService: OrderService) => {
    // Given
    const dish = <Dishes> {};
    const dish2 = <Dishes> {};
    const dish3 = <Dishes> {};
    let orders: Dishes [] = [];

    // When
    orderService.add(dish);
    orderService.add(dish2);
    orderService.add(dish3);
    orders = orderService.getOrdersList();

    // Then
    expect(orders.length).toBe(3);
  }));

  it('should clear order list', inject([OrderService], (orderService: OrderService) => {
    // Given
    const dish = <Dishes> {};
    const dish2 = <Dishes> {};
    const dish3 = <Dishes> {};
    let orders: Dishes [] = [];

    // When
    orderService.add(dish);
    orderService.add(dish2);
    orderService.add(dish3);
    orderService.clear();
    orders = orderService.getOrdersList();

    // Then
    expect(orders.length).toBe(0);
  }));

  it('should return order price', inject([OrderService], (orderService: OrderService) => {
    // Given
    const dish = <Dishes> {price: 10};
    const dish2 = <Dishes> {price: 15.5};
    const dish3 = <Dishes> {price: 2.65};
    let orderPrice: number;

    // When
    orderService.add(dish);
    orderService.add(dish2);
    orderService.add(dish3);
    orderPrice = orderService.getOrderPrice();

    // Then
    expect(orderPrice).toBe(28.15);
  }));

  it('should verify post on saveOrder method', inject([OrderService], (orderService: OrderService) => {
    // Given
    const clientModule = TestBed.get(HttpClient);
    const postSpy = spyOn(clientModule, 'post');
    const order = <Orders>{};

    // When
    orderService.saveOrder(order);

    // Then
    expect(postSpy).toHaveBeenCalled();
  }));


});
