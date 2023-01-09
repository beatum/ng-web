import { TestBed } from '@angular/core/testing';

import { AccessPrivilegeGuardGuard } from './access-privilege-guard.guard';

describe('AccessPrivilegeGuardGuard', () => {
  let guard: AccessPrivilegeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessPrivilegeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
