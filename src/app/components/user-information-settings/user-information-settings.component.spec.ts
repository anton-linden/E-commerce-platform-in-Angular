import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationSettingsComponent } from './user-information-settings.component';

describe('UserInformationSettingsComponent', () => {
  let component: UserInformationSettingsComponent;
  let fixture: ComponentFixture<UserInformationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
