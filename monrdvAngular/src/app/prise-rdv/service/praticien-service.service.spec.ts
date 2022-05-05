import { TestBed } from '@angular/core/testing';

import { PraticienServiceService } from './praticien-service.service';

describe('PraticienServiceService', () => {
  let service: PraticienServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraticienServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
