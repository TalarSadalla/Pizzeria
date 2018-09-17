import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingBasketDetailComponent} from './shopping-basket-detail.component';
import {OrderService} from '../services/order.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('OrderDetailComponent', () => {
  let component: ShoppingBasketDetailComponent;
  let fixture: ComponentFixture<ShoppingBasketDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingBasketDetailComponent],
      providers: [
        HttpClient,
        HttpHandler,
        OrderService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
