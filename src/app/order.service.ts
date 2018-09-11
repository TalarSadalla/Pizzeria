import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Dishes} from './models/dishes.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Orders} from './models/orders.model';

@Injectable({
  providedIn: 'root',
})

export class OrderService implements OnInit, OnDestroy {
  orders: Dishes[] = [];

  constructor(
    readonly http: HttpClient,
  ) {
  }

  add(order: Dishes) {
    this.orders.push(order);
  }

  getOrderPrice(): number {
    let sumCount = 0;
    this.orders.forEach(value => sumCount = +sumCount + +value.price);
    return sumCount;
  }

  getOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>('http://localhost:3000/orders');
  }

  saveOrder(order: Orders): void {
    this.http.post<Orders>('http://localhost:3000/orders', order).subscribe();
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/orders/${id}`);
  }

  clear() {
    this.orders = [];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }


}
