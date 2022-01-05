import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  isAdminPanelAllowed: boolean = false;
  minPasswordLength = 5;

  constructor(private router: Router, private user:UserService) { }

  ngOnInit(): void {
    this.getUserAuthority();
  }

  checkThatPasswordMatches(pass: string, conPass: string) { //Front-end function to check if both password entered matches.
    if (pass == conPass) return true;
    return false;
  }

  saveInformation(passwordInformation: any) {
    if (!passwordInformation.value.currentPassword || !passwordInformation.value.newPassword || !passwordInformation.value.confirmPassword) { return }
    if (!this.checkThatPasswordMatches(passwordInformation.value.newPassword, passwordInformation.value.confirmPassword)) { alert("Passwords doesn't match"); return }
    if (passwordInformation.value.newPassword.length < this.minPasswordLength || passwordInformation.value.confirmPassword.length < this.minPasswordLength) { alert("New password is too short"); return }

    this.user.validateAndChangeUserPassword(JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, ''), passwordInformation.value.currentPassword, passwordInformation.value.newPassword).subscribe(data => {
      if (data == "Passwords do not match.") { alert("Incorrect password given."); }
      if (data == 1) { alert("Passwords successfully changed!"); window.location.reload();}
    })
  }

  logOutUser() {
    sessionStorage.removeItem("Username");
    window.location.reload();
  }

  getUserAuthority() : boolean {
    if (sessionStorage.getItem('Username') == null) return false

    this.user.getUserAuth(JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '')).subscribe(data => {
      if ( data == "No role found" || data == null) return false;
      this.isAdminPanelAllowed = true;
      return true;
    })

    return false;
  }

  navigateToAdminPanel() { this.router.navigateByUrl('admin-panel'); }
}
