import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizzas} from './models/pizzas.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    readonly http: HttpClient,
  ) {}

  getPizzas(): Observable<Pizzas[]> {
    return this.http.get<Pizzas[]>('http://localhost:3000/pizzas');
  }

  getPizza(id: number): Observable<Pizzas> {
    return this.http.get<Pizzas>(`http://localhost:3000/pizzas/${id}`);
  }

  deletePizza(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/pizzas/${id}`);
  }
}
