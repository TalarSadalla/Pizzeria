import {Dishes} from './dishes.model';

export interface Pastas extends Dishes {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  price: number;
}
