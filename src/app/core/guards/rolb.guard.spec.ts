import { TestBed } from '@angular/core/testing';

import { RolbGuard } from './rolb.guard';

describe('RolbGuard', () => {
  let guard: RolbGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolbGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
