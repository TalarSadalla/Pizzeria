import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Drinks} from '../models/drinks.model';
import {DrinkService} from '../drink.service';
import {Dishes} from '../models/dishes.model';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit, OnDestroy {

  drinks: Drinks[];
  private readonly destroy$ = new Subject();

  constructor(
    private readonly service: DrinkService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.loadDrinks();
  }

  private loadDrinks() {
    this.service.getDrinks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.drinks = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  delete(drink: Drinks) {
    this.service.deleteDrink(drink.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadDrinks();
      });
  }

  addDish(dish: Dishes): void {
    this.orderService.add(dish);
  }
}
