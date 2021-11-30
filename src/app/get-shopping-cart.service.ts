import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetShoppingCartService {

  baseURL: string = "http://localhost/ws/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  cleanCart(UserID: number): Observable<any> {
    let url = this.baseURL + "cleanCart.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      userID: UserID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  removeProductFromCart(ProductID: number, UserID: number): Observable<any> {
    let url = this.baseURL + "removeProductFromCart.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      userID: UserID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }


  addProductToCart(ProductID: number, UserID: number): Observable<any> {
    let url = this.baseURL + "addProductToCart.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      userID: UserID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  getUserData(Username: string) {
    let url = this.baseURL + "getUserInformation.php?username=" + Username;
    return this.http.get(url);
  }

  getData(userID: number) {
    let url = this.baseURL + "getShoppingCart.php?userID=" + userID;
    return this.http.get(url);
  }

  getProductData(productID: number) {
    let url = this.baseURL + "getSelectedProduct.php?productID=" + productID;
    return this.http.get(url);
  }
}
