import {Component, OnInit} from '@angular/core';
import {PizzaService} from '../pizza.service';
import {PastaService} from '../pasta.service';
import {DrinkService} from '../drink.service';
import {Pizzas} from '../models/pizzas.model';
import {Drinks} from '../models/drinks.model';
import {Pastas} from '../models/pastas.model';
import {OrderService} from '../order.service';
import {Dishes} from '../models/dishes.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
    '../pizza-list/pizza-list.component.scss',
    '../pasta-list/pasta-list.component.scss',
    '../drink-list/drink-list.component.scss',
  ]
})
export class DashboardComponent implements OnInit {
  pizzas: Pizzas[] = [];
  pastas: Pastas[] = [];
  drinks: Drinks[] = [];

  constructor(private pizzaService: PizzaService,
              private pastaService: PastaService,
              private drinkService: DrinkService,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.getDishes();
  }

  getDishes(): void {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
    this.pastaService.getPastas()
      .subscribe(pastas => this.pastas = pastas);
    this.drinkService.getDrinks()
      .subscribe(drinks => this.drinks = drinks);
  }

  addDish(dish: Dishes): void {
    this.orderService.add(dish);
  }

  deletePizza(pizza: Pizzas): void {
    this.pizzaService.deletePizza(pizza.id);
  }

  deletePasta(pasta: Pastas): void {
    this.pastaService.deletePasta(pasta.id);
  }

  deleteDrink(drink: Drinks): void {
    this.drinkService.deleteDrink(drink.id);
  }
}
