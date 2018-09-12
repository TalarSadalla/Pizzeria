import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Drinks} from './models/drinks.model';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(
    readonly http: HttpClient,
  ) {
  }

  getDrinks(): Observable<Drinks[]> {
    return this.http.get<Drinks[]>('http://localhost:3000/drinks');
  }

  getDrink(id: number): Observable<Drinks> {
    return this.http.get<Drinks>(`http://localhost:3000/drinks/${id}`);
  }

  deleteDrink(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/drinks/${id}`);
  }

  editDrink(drink: Drinks): void {
    this.http.put(`http://localhost:3000/drinks/${drink.id}`, drink).subscribe();
  }

}
