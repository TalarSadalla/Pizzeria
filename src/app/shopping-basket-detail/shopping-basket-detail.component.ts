import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';
import {Dishes} from '../models/dishes.model';

@Component({
  selector: 'app-shopping-basket-detail',
  templateUrl: './shopping-basket-detail.component.html',
  styleUrls: ['./shopping-basket-detail.component.scss']
})

export class ShoppingBasketDetailComponent implements OnInit {

  constructor(public orderService: OrderService) {
  }

  ngOnInit() {
  }

  clearOrder(): void {
    this.orderService.clear();
  }

  orderSize(): number {
    return this.orderService.orders.length;
  }

  getOrders(): Dishes[] {
    return this.orderService.getOrdersList();
  }

  getOrderPrice(): number {
    return this.orderService.getOrderPrice();
  }


}
