import { TestBed } from '@angular/core/testing';

import { BreakingbadService } from './breakingbad.service';

describe('BreakingbadService', () => {
  let service: BreakingbadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakingbadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
