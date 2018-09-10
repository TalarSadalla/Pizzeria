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
  public orderStatus = 'inProgress';
  constructor() {
  }
}
