import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  Username = "";

  view: number = 1;

  constructor(private router: Router) { }

  getUserFromSessionStorage() {
    if (sessionStorage.getItem('Username')) {
      let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username'));
      if (sessionUser != "null") {
        if (sessionUser.length >= 1) {
          sessionUser = sessionUser.replace(/['"]+/g, '');
          this.Username = sessionUser;
        }
      }
    }
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('Username') == null) {
      this.router.navigateByUrl('products');
    }
    this.getUserFromSessionStorage();
  }

  changeView(num: number) {
    this.view = num;
  }

}
