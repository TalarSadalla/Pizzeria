import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DrinkListItemComponent} from './drink-list-item.component';
import {DrinkService} from '../services/drink.service';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

describe('DrinkListItemComponent', () => {
  let component: DrinkListItemComponent;
  let fixture: ComponentFixture<DrinkListItemComponent>;

  beforeEach(async(() => {
    const activatedRouteValue = jasmine.createSpy('ActivatedRoute');
    TestBed.configureTestingModule({
      declarations: [DrinkListItemComponent],
      providers: [
        HttpClient,
        HttpHandler,
        DrinkService,
        Location,
        LocationStrategy,
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {paramMap: convertToParamMap({'id': '1',})}
          }
        },
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/'},
      ],
      imports: [
        FormsModule
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
