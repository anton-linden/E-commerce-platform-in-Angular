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

  deleteProductFromProductID(ProductID: number) {   // TODO: Implement!
    const headers = { 'content-type': 'application/json'}
    var obj = { productID: ProductID };

    return this.http.post(this.baseURL + ".php", obj,{'headers':headers})
  }


}
