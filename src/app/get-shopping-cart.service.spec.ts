import { TestBed } from '@angular/core/testing';

import { GetShoppingCartService } from './get-shopping-cart.service';

describe('GetShoppingCartService', () => {
  let service: GetShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
