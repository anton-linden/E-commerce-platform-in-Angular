import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSelectedProductService {

  baseURL: string = "http://localhost/ws/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  getData(productID: string) {
    let url = this.baseURL + "getSelectedProduct.php?productID=" + productID;
    return this.http.get(url);
  }
}
