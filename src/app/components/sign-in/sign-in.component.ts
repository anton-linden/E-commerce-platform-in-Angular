import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userArr: Array<{Username: string}> = [];

  minUsernameLength = 3;
  maxUsernameLength = 15;

  minPasswordLength = 5;
  maxPasswordLength = 32;

  enteredUsername = "";
  enteredPwd = "";

  status = "";

  constructor(private user:LoginService, private router: Router) {
  }

  getUserInformation() {
    this.enteredUsername = this.enteredUsername.replace(/[' ]+/g, '');
    this.enteredPwd = this.enteredPwd.replace(/[' ]+/g, '');

    this.user.getData(this.enteredUsername, this.enteredPwd).subscribe(data=>{
      console.warn(data);
      if (data == 1) {
        this.status = "Login successfull";
        sessionStorage.setItem('Username', this.enteredUsername);
        window.location.reload();
      } else {
        this.status = "Invalid credentials";
      }
    })
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('products');
    }
  }

  resetStatus() {
    this.status = "";
  }

  submit(login: any) {
    if (login.value.username.length < this.minUsernameLength) {
      this.status = ("Username is too short, minimum: " + this.minUsernameLength);
      console.warn(this.status);
      return;
    }

    if (login.value.password.length < this.minPasswordLength) {
      this.status = "Password is too short, minimum: " + this.minPasswordLength;
      console.warn(this.status);
      return;
    }

    this.resetStatus();
    this.enteredUsername = login.value.username;
    this.enteredPwd = login.value.password;
    this.getUserInformation();

  }

}
