import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  Username = "";

  view: number = 1;

  constructor() { }

  getUserFromSessionStorage() {
    if (sessionStorage.getItem('Username')) {
      let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username'));

      console.warn("sessionUser: " + sessionUser);

      if (sessionUser != "null") {
        if (sessionUser.length >= 1) {
          sessionUser = sessionUser.replace(/['"]+/g, '');
          this.Username = sessionUser;
        }
      }
    }
  }

  ngOnInit(): void {
    this.getUserFromSessionStorage();
  }

  changeView(num: number) {
    this.view = num;
  }

}
