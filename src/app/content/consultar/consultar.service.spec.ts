import { TestBed, inject } from '@angular/core/testing';

import { ConsultarService } from './consultar.service';

describe('ConsultarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultarService]
    });
  });

  it('should be created', inject([ConsultarService], (service: ConsultarService) => {
    expect(service).toBeTruthy();
  }));
});
