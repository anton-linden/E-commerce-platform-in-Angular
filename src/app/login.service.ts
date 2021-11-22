import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}

  getData(Username: string, Password: string) {
    let url="http://localhost/ws/webbshop/src/app/api/loginUser.php?";
    //let url="/api/loginUser.php?";
    url = url + "Username=" + Username + "&Pwd=" + Password;
    console.warn(url);
    return this.http.get(url);
  }
}
