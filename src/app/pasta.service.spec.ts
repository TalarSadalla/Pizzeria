import { TestBed, inject } from '@angular/core/testing';

import { PastaService } from './pasta.service';

describe('PastaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastaService]
    });
  });

  it('should be created', inject([PastaService], (service: PastaService) => {
    expect(service).toBeTruthy();
  }));
});
