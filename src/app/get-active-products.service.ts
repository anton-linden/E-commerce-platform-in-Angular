import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetActiveProductsService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  getData() {
    let url = this.baseURL + "getActiveProducts.php";
    return this.http.get(url);
  }
}
