import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PastaListItemComponent} from './pasta-list-item.component';
import {OrderListItemComponent} from '../order-list-item/order-list-item.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {OrderService} from '../services/order.service';
import {FormsModule} from '@angular/forms';

describe('PastaListItemComponent', () => {
  let component: PastaListItemComponent;
  let fixture: ComponentFixture<PastaListItemComponent>;

  beforeEach(async(() => {
    const activatedRouteValue = jasmine.createSpy('ActivatedRoute');
    TestBed.configureTestingModule({
      declarations: [PastaListItemComponent],
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
    fixture = TestBed.createComponent(PastaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
