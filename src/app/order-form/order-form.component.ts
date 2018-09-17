import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Delivery} from '../models/delivery.model';
import {Orders} from '../models/orders.model';
import {OrderStatus} from '../models/orderStatus';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {
  delivery = new Delivery();
  newOrder = new Orders();
  subscription: Subscription;

  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
  }

  saveOrder(): void {
    this.newOrder.productList = this.orderService.orders;
    this.newOrder.orderStatus = OrderStatus.inProgress;
    this.newOrder.summaryPrice = this.orderService.getOrderPrice();
    this.newOrder.deliveryAddress = this.delivery;
    this.subscription = this.orderService.saveOrder(this.newOrder).subscribe(() => {
      this.orderService.clear();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
