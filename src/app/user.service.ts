import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  getCustomerIDFromUsername(Username: string) { return this.http.get(this.baseURL + "getCustomerIDFromUsername.php?username=" + Username); }

  getUserAuth(Username: string) {
    return this.http.get(this.baseURL + "getUserRoleFromUsername.php?username=" + Username);
  }

  validateAndChangeUserPassword(Username: string, CurrentPassword: string, NewPassword: string) {
    const headers = { 'content-type': 'application/json'}

    const obj = {
      username: Username,
      currentPassword: CurrentPassword,
      newPassword: NewPassword
    };

    return this.http.post(this.baseURL + "changeUserPassword.php", obj,{'headers':headers})
  }

}
