import { TestBed, inject } from '@angular/core/testing';

import { DrinkService } from './drink.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DrinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
        HttpHandler,
        DrinkService]
    });
  });

  it('should be created', inject([DrinkService], (service: DrinkService) => {
    expect(service).toBeTruthy();
  }));
});
