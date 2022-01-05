import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AOrderPageComponent } from './a-order-page.component';

describe('AOrderPageComponent', () => {
  let component: AOrderPageComponent;
  let fixture: ComponentFixture<AOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
