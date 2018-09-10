import {Component, OnDestroy, OnInit} from '@angular/core';

import {Pizzas} from '../models/pizzas.model';
import {PizzaService} from '../pizza.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Dishes} from '../models/dishes.model';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit, OnDestroy {

  pizzas: Pizzas[];
  private readonly destroy$ = new Subject();

  constructor(
    private readonly service: PizzaService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.loadPizzas();
  }

  private loadPizzas() {
    this.service.getPizzas()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.pizzas = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  delete(pizza: Pizzas) {
    this.service.deletePizza(pizza.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadPizzas();
      });
  }

  addDish(dish: Dishes): void {
    this.orderService.add(dish);
  }
}
