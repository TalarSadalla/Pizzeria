import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderListItemComponent} from './order-list-item.component';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {OrderService} from '../services/order.service';

describe('OrderListItemComponent', () => {
  let component: OrderListItemComponent;
  let fixture: ComponentFixture<OrderListItemComponent>;

  beforeEach(async(() => {
    const activatedRouteValue = jasmine.createSpy('ActivatedRoute');
    TestBed.configureTestingModule({
      declarations: [OrderListItemComponent],
      providers: [
        HttpClient,
        HttpHandler,
        Location,
        LocationStrategy,
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {paramMap: convertToParamMap({'id': '1'})}
          }
        },
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/'},
        OrderService
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
