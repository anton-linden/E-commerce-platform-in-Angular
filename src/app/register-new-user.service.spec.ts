import { TestBed } from '@angular/core/testing';

import { RegisterNewUserService } from './register-new-user.service';

describe('RegisterNewUserService', () => {
  let service: RegisterNewUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterNewUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
