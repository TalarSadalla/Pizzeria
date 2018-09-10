import {Dishes} from './dishes.model';
import {OrderStatus} from './orderStatus';
import {Delivery} from './delivery.model';

export class Orders {
  id: number;
  productList: Dishes[];
  summaryPrice: number;
  deliveryAddress: Delivery;
  orderStatus: OrderStatus;

  constructor() {
  }
}
