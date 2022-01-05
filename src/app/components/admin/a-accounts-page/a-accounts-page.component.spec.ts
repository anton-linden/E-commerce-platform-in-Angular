import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccountsPageComponent } from './a-accounts-page.component';

describe('AAccountsPageComponent', () => {
  let component: AAccountsPageComponent;
  let fixture: ComponentFixture<AAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAccountsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
