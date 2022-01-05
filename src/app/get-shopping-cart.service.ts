import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetShoppingCartService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  changeAmountOfProductInCart(ProductsInCartID: number, Amount: number) {
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productsInCartID: ProductsInCartID,
      amount: Amount
    };

    return this.http.post(this.baseURL + "changeAmountOnProductInCart.php", obj, {'headers':headers})
  }

  cleanCart(UserID: number): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    var obj = { userID: UserID };
    return this.http.post(this.baseURL + "cleanCart.php", obj, {'headers':headers})
  }

  removeProductFromCart(ProductID: number, UserID: number): Observable<any> {
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      userID: UserID
    };

    return this.http.post(this.baseURL + "removeProductFromCart.php", obj, {'headers':headers})
  }


  addProductToCart(ProductID: number, UserID: number): Observable<any> {
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      userID: UserID
    };

    return this.http.post(this.baseURL + "addProductToCart.php", obj, {'headers':headers})
  }

  getUserData(Username: string) { return this.http.get(this.baseURL + "getUserInformation.php?username=" + Username); }
  getData(userID: number) { return this.http.get(this.baseURL + "getShoppingCart.php?userID=" + userID); }
  getProductData(productID: number) { return this.http.get(this.baseURL + "getSelectedProduct.php?productID=" + productID); }
}
