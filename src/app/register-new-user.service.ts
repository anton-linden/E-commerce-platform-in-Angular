import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from "src/app/user/user.module";

@Injectable({
  providedIn: 'root'
})
export class RegisterNewUserService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  addUser(user:UserModule): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = user;
    let url = this.baseURL + "createUser.php";
    return this.http.post(url, body,{'headers':headers})
  }

  createCustomerFromID(UserID: number) {
    let url = this.baseURL + "createCustomerFromID.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      userID: UserID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  createCustomer() { // Without a userID, a customer doesn't need to be a logged in user.
    let url = this.baseURL + "createCustomer.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {};

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }
}
