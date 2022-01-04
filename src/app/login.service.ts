import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  getData(Username: string, Password: string) {
    let url= this.baseURL + "loginUser.php?Username=" + Username + "&Pwd=" + Password;
    return this.http.get(url);
  }
}
