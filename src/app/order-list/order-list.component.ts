import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {OrderService} from '../services/order.service';
import {Dishes} from '../models/dishes.model';
import {Orders} from '../models/orders.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders: Orders[];
  private readonly destroy$ = new Subject();

  constructor(
    private readonly orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  private loadOrders() {
    this.orderService.getOrders()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.orders = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  delete(dish: Dishes) {
    this.orderService.deleteOrder(dish.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadOrders();
      });
  }
}
