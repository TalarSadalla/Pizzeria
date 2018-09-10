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


  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
  }

  getFirstName(event: any) {
    this.delivery.firstName = event.target.value;
  }

  getLastName(event: any) {
    this.delivery.lastName = event.target.value;
  }

  getEmail(event: any) {
    this.delivery.email = event.target.value;
  }

  getCity(event: any) {
    this.delivery.city = event.target.value;
  }

  getPhoneNumber(event: any) {
    this.delivery.phone = event.target.value;
  }

  getStreet(event: any) {
    this.delivery.street = event.target.value;
  }

  getFlatNumber(event: any) {
    this.delivery.flatNumber = event.target.value;
  }

  getPaymentMethod(event: any) {
    this.delivery.paymentMethod = event.target.value;
  }


  saveOrder(): void {
    const newOrder = new Orders();
    newOrder.productList = this.orderService.orders;
    newOrder.orderStatus = OrderStatus.inProgress;
    newOrder.summaryPrice = this.orderService.getOrderPrice();
    newOrder.deliveryAddress = this.delivery;
    this.orderService.saveOrder(newOrder);
  }

}
