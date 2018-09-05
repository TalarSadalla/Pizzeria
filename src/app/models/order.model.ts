import {Dishes} from './dishes.model';
import {OrderStatus} from './orderStatus';

export interface Order {
  id: number;
  productList: Dishes[];
  summaryPrice: number;
  orderStatus: OrderStatus;
}
