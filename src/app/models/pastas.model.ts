import {Dishes} from './dishes.model';

export class Pastas implements Dishes {
  id: number;
  name: string;
  isAvailable: boolean;
  description: string;
  price: number;
}
