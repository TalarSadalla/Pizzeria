import { TestBed, inject } from '@angular/core/testing';

import { LoginDataService } from './login-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
        HttpHandler,
        LoginDataService],
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([LoginDataService], (service: LoginDataService) => {
    expect(service).toBeTruthy();
  }));
});
