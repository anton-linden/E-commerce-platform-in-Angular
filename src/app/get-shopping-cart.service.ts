import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetShoppingCartService {

  constructor(private http:HttpClient) {}

  cleanCart(UserID: number): Observable<any> {
    let url = "http://localhost/ws/webbshop/src/app/api/cleanCart.php";
    //let url = "/api/cleanCart.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      userID: UserID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  removeProductFromCart(ProductID: number, UserID: number): Observable<any> {
    let url = "http://localhost/ws/webbshop/src/app/api/removeProductFromCart.php";
    //let url = "/api/removeProductFromCart.php";
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
    let url = "http://localhost/ws/webbshop/src/app/api/addProductToCart.php";
    //let url = "/api/addProductToCart.php";
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
    let url="http://localhost/ws/webbshop/src/app/api/getUserInformation.php?username=";
    //let url="/api/getUserInformation.php?username=";
    url = url + Username;
    console.warn(url);
    return this.http.get(url);
  }

  getData(userID: number) {
    let url="http://localhost/ws/webbshop/src/app/api/getShoppingCart.php?userID=";
    //let url="/api/getShoppingCart.php?userID=";
    url = url + userID;
    console.warn(url);
    return this.http.get(url);
  }

  getProductData(productID: number) {
    let url="http://localhost/ws/webbshop/src/app/api/getSelectedProduct.php?productID=";
    //let url="/api/getSelectedProduct.php?productID=";
    url = url + productID;
    console.warn(url);
    return this.http.get(url);
  }
}
