import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  getProductInformation(ProductID: number) { return this.http.get(this.baseURL + "getProductFromProductID.php?productID=" + ProductID); }

  updateProduct(ProductID: number, Name: string, Description: string, Price: number, FilePath: string, Amount: number, Status: number) {
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      name: Name,
      description: Description,
      price: Price,
      filePath: FilePath,
      amount: Amount,
      hidden: +Status
    };

    return this.http.post(this.baseURL + "updateProduct.php", obj, {'headers':headers})
  }

  createProduct(Name: string, Description: string, Price: number, FilePath: string, Amount: number, Status: boolean) {
    const headers = { 'content-type': 'application/json'}

    var obj = {
      name: Name,
      description: Description,
      price: Price,
      filePath: FilePath,
      amount: Amount,
      hidden: +Status
    };

    return this.http.post(this.baseURL + "createProduct.php", obj, {'headers':headers})
  }
}
