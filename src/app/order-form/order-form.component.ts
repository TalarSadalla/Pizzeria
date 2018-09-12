import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {Delivery} from '../models/delivery.model';
import {Orders} from '../models/orders.model';
import {OrderStatus} from '../models/orderStatus';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  delivery = new Delivery();
  newOrder = new Orders();

  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
  }

  saveOrder(): void {
    this.newOrder.productList = this.orderService.orders;
    this.newOrder.orderStatus = OrderStatus.inProgress;
    this.newOrder.summaryPrice = this.orderService.getOrderPrice();
    this.newOrder.deliveryAddress = this.delivery;
    this.orderService.saveOrder(this.newOrder);
    this.orderService.clear();
  }

}
