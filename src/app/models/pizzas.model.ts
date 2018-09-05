import {Dishes} from './dishes.model';

export interface Pizzas extends Dishes {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  price: number;
}
