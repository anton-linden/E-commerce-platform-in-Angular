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

  constructor(private router: Router, private user:UserService) { }

  ngOnInit(): void {
    this.getUserAuthority();
  }

  logOutUser() {
    sessionStorage.removeItem("Username");
    window.location.reload();
  }

  getUserAuthority() : boolean {
    if (sessionStorage.getItem('Username') == null) return false
    console.log(sessionStorage.getItem('Username'));

    this.user.getUserAuth(JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '')).subscribe(data => {
      if ( data == "No role found") return false
      this.isAdminPanelAllowed = true;
      return true;
    })

    return false;
  }

  navigateToAdminPanel() { this.router.navigateByUrl('admin-panel'); }
}
