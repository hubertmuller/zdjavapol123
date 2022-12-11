import { TestBed } from '@angular/core/testing';

import { PogodaService } from './pogoda.service';

describe('PogodaService', () => {
  let service: PogodaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PogodaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
