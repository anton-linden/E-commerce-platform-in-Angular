import { TestBed } from '@angular/core/testing';

import { GetSelectedProductService } from './get-selected-product.service';

describe('GetSelectedProductService', () => {
  let service: GetSelectedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSelectedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
