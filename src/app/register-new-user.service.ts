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
    return this.http.post(this.baseURL + "createUser.php", user, {'headers':headers})
  }

  createCustomerFromID(UserID: number) {
    const headers = { 'content-type': 'application/json'}
    var obj = { userID: UserID };
    return this.http.post(this.baseURL + "createCustomerFromID.php", obj, {'headers':headers})
  }

  createCustomer() { // Without a userID, a customer doesn't need to be a logged in user.
    const headers = { 'content-type': 'application/json'}
    var obj = {};
    return this.http.post(this.baseURL + "createCustomer.php", obj, {'headers':headers})
  }
}
