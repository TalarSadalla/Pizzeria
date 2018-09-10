import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Pastas} from '../models/pastas.model';
import {PastaService} from '../pasta.service';
import {OrderService} from '../order.service';
import {Dishes} from '../models/dishes.model';

@Component({
  selector: 'app-pasta-list',
  templateUrl: './pasta-list.component.html',
  styleUrls: ['./pasta-list.component.scss']
})
export class PastaListComponent implements OnInit, OnDestroy {

  pastas: Pastas[];
  private readonly destroy$ = new Subject();

  constructor(
    private readonly service: PastaService,
    private orderService: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.loadPastas();
  }

  private loadPastas() {
    this.service.getPastas()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.pastas = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  delete(pasta: Pastas) {
    this.service.deletePasta(pasta.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loadPastas();
      });
  }

  addDish(dish: Dishes): void {
    this.orderService.add(dish);
  }
}
