import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PastaListComponent} from './pasta-list.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {OrderService} from '../services/order.service';
import {LoginDataService} from '../services/login-data.service';
import {PastaService} from '../services/pasta.service';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderComponent} from '../order/order.component';

describe('PastaListComponent', () => {
  let component: PastaListComponent;
  let fixture: ComponentFixture<PastaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PastaListComponent, OrderComponent],
      providers: [
        OrderService,
        LoginDataService,
        PastaService
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
