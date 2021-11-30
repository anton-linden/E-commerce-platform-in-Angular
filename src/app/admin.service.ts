import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL: string = "http://localhost/ws/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  createProduct(Name: string, Description: string, Price: number, FilePath: string) {
    let url = this.baseURL + "createProduct.php";
    //let url = "/api/createProduct.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      name: Name,
      description: Description,
      price: Price,
      filePath: FilePath
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }
}
