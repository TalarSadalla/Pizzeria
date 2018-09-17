import { TestBed, inject } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PizzaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
        HttpHandler,
        PizzaService]
    });
  });

  it('should be created', inject([PizzaService], (service: PizzaService) => {
    expect(service).toBeTruthy();
  }));
});
