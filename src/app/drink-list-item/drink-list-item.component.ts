import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Drinks} from '../models/drinks.model';
import {DrinkService} from '../drink.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-drink-list-item',
  templateUrl: './drink-list-item.component.html',
  styleUrls: ['./drink-list-item.component.scss']
})

export class DrinkListItemComponent implements OnInit, OnDestroy {
  drink: Drinks;
  @Output() deletes = new EventEmitter<Drinks>();

  private readonly destroy$ = new Subject();

  constructor(private route: ActivatedRoute,
              private drinkService: DrinkService,
              private location: Location) {
  }

  ngOnInit() {
    this.getDrink();
  }

  getDrink(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.drinkService.getDrink(id)
      .subscribe(drink => this.drink = drink);
  }

  delete(drink: Drinks, event: Event) {
    this.deletes.emit(this.drink);
    event.stopPropagation();
  }

  goBack(): void {
    this.location.back();
  }

  editDrinkAvailability(): void {
    this.drinkService.editDrink(this.drink);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
