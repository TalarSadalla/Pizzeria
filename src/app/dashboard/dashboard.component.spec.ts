import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {PizzaService} from '../services/pizza.service';
import {DrinkService} from '../services/drink.service';
import {PastaService} from '../services/pasta.service';
import {LoginDataService} from '../services/login-data.service';
import {OrderService} from '../services/order.service';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderComponent} from '../order/order.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, OrderComponent],
      providers: [
        HttpClient,
        HttpHandler,
        PizzaService,
        DrinkService,
        PastaService,
        LoginDataService,
        OrderService],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
