import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Pastas} from '../models/pastas.model';
import {PastaService} from '../services/pasta.service';
import {OrderService} from '../services/order.service';
import {Dishes} from '../models/dishes.model';
import {LoginDataService} from '../services/login-data.service';

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
    private readonly orderService: OrderService,
    private readonly loginService: LoginDataService
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

  isAdminLogged(): boolean {
    return this.loginService.getIsLogged();
  }
}
