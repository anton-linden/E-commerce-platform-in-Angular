import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModule } from "src/app/user/user.module";

@Injectable({
  providedIn: 'root'
})
export class RegisterNewUserService {

  baseURL: string = "http://localhost/ws/webbshop/src/app/api/createUser.php";
  //baseURL: string = "/api/createUser.php";

  constructor(private http:HttpClient) {}

  addUser(user:UserModule): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    //const body=JSON.stringify(user);
    const body=user;
    //console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }

  createCustomerFromID(UserID: number) {
    let url = "http://localhost/ws/webbshop/src/app/api/createCustomerFromID.php";
    //let url = "/api/createCustomerFromID.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      userID: UserID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  createCustomer() { // Without a userID, a customer doesn't need to be a logged in user.
    let url = "http://localhost/ws/webbshop/src/app/api/createCustomer.php";
    //let url = "/api/createCustomer.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {};

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }
}

/*export class User {
 Username:string
 Pwd:string
}*/
