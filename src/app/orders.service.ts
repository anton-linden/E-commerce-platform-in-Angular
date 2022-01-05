import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}

  getCustomer(UserID: number) { return this.http.get(this.baseURL + "getCustomerFromUserID.php?userID=" + UserID); }
  getOrderIDFromCustomerID(CustomerID: number) { return this.http.get(this.baseURL + "getOrderIDFromCustomerID.php?customerID=" + CustomerID); }
  getAllOrdersFromCustomerID(CustomerID: number) { return this.http.get(this.baseURL + "getAllOrdersFromCustomerID.php?customerID=" + CustomerID); }
  getOrderFromOrderID(OrderID: number) { return this.http.get(this.baseURL + "getOrderFromOrderID.php?orderID=" + OrderID); }
  getProductFromProductID(ProductID: number) { return this.http.get(this.baseURL + "getProductFromProductID.php?productID=" + ProductID); }

  updateCustomer(obj: any) {
    const headers = { 'content-type': 'application/json'}
    return this.http.post(this.baseURL + "updateCustomer.php", obj, {'headers':headers})
  }

  createOrder(CustomerID: number) {
    const headers = { 'content-type': 'application/json'}
    var obj = { customerID: CustomerID };
    return this.http.post(this.baseURL + "createOrder.php", obj, {'headers':headers})
  }

  addProductToOrder(ProductID: number, OrderID: number, ProductPrice: number, ProductAmount: number): Observable<any> { //Untested
    const headers = { 'content-type': 'application/json'}

    var obj = {
      productID: ProductID,
      orderID: OrderID,
      productPrice: ProductPrice,
      productAmount: ProductAmount
    };

    return this.http.post(this.baseURL + "addProductToOrder.php", obj, {'headers':headers})
  }
}
