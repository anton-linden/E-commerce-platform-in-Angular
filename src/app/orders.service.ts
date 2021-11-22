import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) {}

  getCustomer(userID: number) {
    let url="http://localhost/ws/webbshop/src/app/api/getCustomerFromUserID.php?";
    //let url="/api/getCustomerFromUserID.php?";
    url = url + "userID=" + userID;
    console.warn(url);
    return this.http.get(url);
  }

  getOrderIDFromCustomerID(CustomerID: number) {
    let url="http://localhost/ws/webbshop/src/app/api/getOrderIDFromCustomerID.php?";
    //let url="/api/getOrderIDFromCustomerID.php?";
    url = url + "customerID=" + CustomerID;
    console.warn(url);
    return this.http.get(url);
  }

  getAllOrdersFromCustomerID(CustomerID: number) {
    let url="http://localhost/ws/webbshop/src/app/api/getAllOrdersFromCustomerID.php?";
    //let url="/api/getAllOrdersFromCustomerID.php?";
    url = url + "customerID=" + CustomerID;
    console.warn(url);
    return this.http.get(url);
  }

  createOrder(CustomerID: number) {
    let url = "http://localhost/ws/webbshop/src/app/api/createOrder.php";
    //let url = "/api/createOrder.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      customerID: CustomerID
    };

    const body=obj;
    console.log(body)
    return this.http.post(url, body,{'headers':headers})
  }

  addProductToOrder(ProductID: number, OrderID: number, ProductPrice: number, ProductAmount: number): Observable<any> { //Untested
    let url = "http://localhost/ws/webbshop/src/app/api/addProductToOrder.php";
    //let url = "/api/addProductToOrder.php";
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
