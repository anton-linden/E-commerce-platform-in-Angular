import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AEditComponent } from './a-edit.component';

describe('AEditComponent', () => {
  let component: AEditComponent;
  let fixture: ComponentFixture<AEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
