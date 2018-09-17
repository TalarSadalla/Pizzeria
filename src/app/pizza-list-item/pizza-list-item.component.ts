import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizzas} from '../models/pizzas.model';
import {PizzaService} from '../services/pizza.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pizza-list-item',
  templateUrl: './pizza-list-item.component.html',
  styleUrls: ['./pizza-list-item.component.scss']
})

export class PizzaListItemComponent implements OnInit {
  pizza: Pizzas;
  @Output() deletes = new EventEmitter<Pizzas>();

  constructor(private route: ActivatedRoute,
              private pizzaService: PizzaService,
              private location: Location) {
  }

  delete(pizza: Pizzas, event: Event) {
    this.deletes.emit(this.pizza);
    event.stopPropagation();
  }

  ngOnInit() {
    this.getPizza();
  }

  getPizza(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
      .subscribe(pizza => this.pizza = pizza);
  }

  goBack(): void {
    this.location.back();
  }

  editPizzaAvailability(): void {
    this.pizzaService.editPizza(this.pizza);
  }

}
