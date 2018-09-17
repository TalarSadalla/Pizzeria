import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinkListComponent} from './drink-list.component';
import {DrinkService} from '../services/drink.service';
import {OrderService} from '../services/order.service';
import {LoginDataService} from '../services/login-data.service';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderComponent} from '../order/order.component';
import {HttpClientModule} from '@angular/common/http';

describe('DrinkListComponent', () => {
  let component: DrinkListComponent;
  let fixture: ComponentFixture<DrinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrinkListComponent, OrderComponent],
      providers: [
        DrinkService,
        OrderService,
        LoginDataService
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
