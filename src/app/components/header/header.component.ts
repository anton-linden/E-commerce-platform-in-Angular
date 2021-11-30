import { Component, OnInit } from '@angular/core';
import { GlobalModule } from 'src/app/global/global.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Username = "";

  constructor() {
  }

  getUserFromSessionStorage() {
    if (sessionStorage.getItem('Username')) {
      let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username'));

      //console.warn("sessionUser: " + sessionUser);

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

}
