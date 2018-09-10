export class Delivery {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public city: string;
  public street: string;
  public flatNumber: string;
  public paymentMethod = 'cash';
  public pizzasIds: number[];
  public pastaIds: number[];
  public drinkIds: number[];
  public orderStatus = 'inProgress';
  public orderTime: string;

  constructor() {
  }
}
