import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSelectedProductService {

  constructor(private http:HttpClient) {}

  getData(productID: string) {
    let url="http://localhost/ws/webbshop/src/app/api/getSelectedProduct.php?productID=";
    //let url="/api/getSelectedProduct.php?productID=";
    url = url + productID;
    console.warn(url);
    return this.http.get(url);
  }
}
