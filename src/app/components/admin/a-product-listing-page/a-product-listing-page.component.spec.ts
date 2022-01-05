import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProductListingPageComponent } from './a-product-listing-page.component';

describe('AProductListingPageComponent', () => {
  let component: AProductListingPageComponent;
  let fixture: ComponentFixture<AProductListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProductListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AProductListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
