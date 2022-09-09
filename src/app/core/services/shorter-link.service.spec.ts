import { TestBed } from '@angular/core/testing';

import { ShorterLinkService } from './shorter-link.service';

describe('ShorterLinkService', () => {
  let service: ShorterLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShorterLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
