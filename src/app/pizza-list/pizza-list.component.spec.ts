import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PizzaListComponent} from './pizza-list.component';
import {PizzaService} from '../services/pizza.service';
import {LoginDataService} from '../services/login-data.service';
import {OrderService} from '../services/order.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderComponent} from '../order/order.component';

describe('PizzaListComponent', () => {
  let component: PizzaListComponent;
  let fixture: ComponentFixture<PizzaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaListComponent, OrderComponent],
      providers: [
        PizzaService,
        OrderService,
        LoginDataService,
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
