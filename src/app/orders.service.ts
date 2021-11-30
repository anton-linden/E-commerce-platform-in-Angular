import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseURL: string = "http://localhost/ws/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  updateCustomer(obj: any) {
    let url = this.baseURL + "updateCustomer.php";
    const headers = { 'content-type': 'application/json'}

    const body=obj;
    return this.http.post(url, body,{'headers':headers})
  }

  getCustomer(UserID: number) {
    let url = this.baseURL + "getCustomerFromUserID.php?userID=" + UserID;
    return this.http.get(url);
  }

  getOrderIDFromCustomerID(CustomerID: number) {
    let url = this.baseURL + "getOrderIDFromCustomerID.php?customerID=" + CustomerID;
    return this.http.get(url);
  }

  getAllOrdersFromCustomerID(CustomerID: number) {
    let url = this.baseURL + "getAllOrdersFromCustomerID.php?customerID=" + CustomerID;
    return this.http.get(url);
  }

  getOrderFromOrderID(OrderID: number) {
    let url = this.baseURL + "getOrderFromOrderID.php?orderID=" + OrderID;
    return this.http.get(url);
  }

  getProductFromProductID(ProductID: number) {
    let url= this.baseURL + "getProductFromProductID.php?productID=" + ProductID;
    return this.http.get(url);
  }


  createOrder(CustomerID: number) {
    let url = this.baseURL + "createOrder.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      customerID: CustomerID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  addProductToOrder(ProductID: number, OrderID: number, ProductPrice: number, ProductAmount: number): Observable<any> { //Untested
    let url = this.baseURL + "addProductToOrder.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      orderID: OrderID,
      productPrice: ProductPrice,
      productAmount: ProductAmount
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }
}
