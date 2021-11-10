import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProductPageComponent } from './a-product-page.component';

describe('AProductPageComponent', () => {
  let component: AProductPageComponent;
  let fixture: ComponentFixture<AProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
