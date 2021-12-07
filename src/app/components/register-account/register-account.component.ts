import { Component, OnInit } from '@angular/core';
import { RegisterNewUserService } from 'src/app/register-new-user.service';
import { UserModule } from "src/app/user/user.module";
import { GlobalModule } from "src/app/global/global.module";
import { GetShoppingCartService } from 'src/app/get-shopping-cart.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  user = new UserModule('', '');
  signedInUser = new GlobalModule('');
  minUsername = 3;
  minPassword = 5;

  status = "";

  maxUsernameLength = 15;
  maxPasswordLength = 32;

  constructor(private register:RegisterNewUserService, private router: Router, private cart:GetShoppingCartService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('Username')) {
      this.router.navigateByUrl('products');
    }
  }

  checkThatPasswordMatches(pass: string, conPass: string) { //Front-end function to check if both password entered matches.
    if (pass == conPass) return true;
    return false;
  }

  sendUserInformation() { // Creates a account and a customer.
    this.register.addUser(this.user)
      .subscribe(data => {
        console.log(data)
        if (data == 1) {
          this.status = "Account successfully created!";

          this.user.Username = this.user.Username.replace(/[' ]+/g, '');
          this.user.Password = this.user.Password.replace(/[' ]+/g, '');

          this.cart.getUserData(this.user.Username).subscribe(data=>{
            this.register.createCustomerFromID(Object(data)[0].userID)
              .subscribe(data => {
                console.log(data)
                if (data == 1) {
                  sessionStorage.setItem('Username', this.user.Username); //Issue if username is not valid
                  window.location.reload();
                } else if (data == 2) {
                }
              })
          })
        } else if (data == 2) {
          this.status = "Username already taken!";
        }
      })
  }

  resetStatus() {
    this.status = "";
  }

  submit(login: any) { //Function to call when register button is pressed.
    if (login.value.username) {

      if (login.value.username.length < this.minUsername) {
        this.status = ("Username is too short, minimum: " + this.minUsername);
        console.warn(this.status);
        return;
      }

      if (login.value.password.length < this.minPassword) {
        this.status = "Password is too short, minimum: " + this.minPassword;
        console.warn(this.status);
        return;
      }

      if (this.checkThatPasswordMatches(login.value.password, login.value.confirmPassword)) {
        this.resetStatus();
        this.user.Username = login.value.username;
        this.user.Password = login.value.password;
        this.sendUserInformation();
      } else {
        this.status = "Passwords doesn't match.";
        console.warn(this.status);
      };
    } else {
      this.status = "Username missing.";
      console.warn(this.status);
    }
  }
}
