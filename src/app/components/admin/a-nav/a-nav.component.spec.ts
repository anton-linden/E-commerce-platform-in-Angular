import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANavComponent } from './a-nav.component';

describe('ANavComponent', () => {
  let component: ANavComponent;
  let fixture: ComponentFixture<ANavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ANavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
