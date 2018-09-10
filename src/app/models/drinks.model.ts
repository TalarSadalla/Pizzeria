import {Dishes} from './dishes.model';

export interface Drinks extends Dishes {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  price: number;

}
