import { TestBed } from '@angular/core/testing';

import { GetActiveProductsService } from './get-active-products.service';

describe('GetActiveProductsService', () => {
  let service: GetActiveProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetActiveProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
