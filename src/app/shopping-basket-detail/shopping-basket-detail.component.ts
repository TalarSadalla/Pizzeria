import {Component, OnInit} from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-shopping-basket-detail',
  templateUrl: './shopping-basket-detail.component.html',
  styleUrls: ['./shopping-basket-detail.component.scss']
})

export class ShoppingBasketDetailComponent implements OnInit {

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
  }


}
