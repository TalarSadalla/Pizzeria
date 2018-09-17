import {TestBed, inject} from '@angular/core/testing';

import {PastaService} from './pasta.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PastaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,
        HttpHandler,
        PastaService]
    });
  });

  it('should be created', inject([PastaService], (service: PastaService) => {
    expect(service).toBeTruthy();
  }));
});
