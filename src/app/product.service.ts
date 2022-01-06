import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) { }

  getAllProducts() { return this.http.get(this.baseURL + "getAllProducts.php"); }

  deleteProductFromProductID(ProductID: number) {
    const headers = { 'content-type': 'application/json'}
    var obj = { productID: ProductID };
    return this.http.post(this.baseURL + "deleteProductFromProductID.php", obj,{'headers':headers})
  }

  flipProductStatusFromProductID(ProductID: number, Status: number) {
    const headers = { 'content-type': 'application/json'}
    var obj = {
      productID: ProductID,
      status: +Status
     };
    return this.http.post(this.baseURL + "flipProductStatusFromProductID.php", obj,{'headers':headers})
  }

}
