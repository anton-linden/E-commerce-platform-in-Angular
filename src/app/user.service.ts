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

  deleteUserWithUserID(UserID: number): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    var obj = { userID: UserID };

    return this.http.post(this.baseURL + "deleteUserWithUserID.php", obj,{'headers':headers})
  }

  getAllUsers() { return this.http.get(this.baseURL + "getAllUsers.php"); }
  getCustomerIDFromUsername(Username: string) { return this.http.get(this.baseURL + "getCustomerIDFromUsername.php?username=" + Username); }
  getRoleFromRoleID(RoleID: number) { return this.http.get(this.baseURL + "getRoleNameFromRoleID.php?roleID=" + RoleID); }
  getUserAuth(Username: string) { return this.http.get(this.baseURL + "getUserRoleFromUsername.php?username=" + Username); }

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
