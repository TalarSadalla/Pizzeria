import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Orders} from '../models/orders.model';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  order: Orders;

  @Output() deletes = new EventEmitter<Orders>();

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private location: Location) {
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
      .subscribe(order => this.order = order);
  }

  delete(order: Orders, event: Event) {
    this.deletes.emit(this.order);
    event.stopPropagation();
  }

  goBack(): void {
    this.location.back();
  }

  editOrderStatus(): void {
    this.orderService.editOrder(this.order);
  }

}
