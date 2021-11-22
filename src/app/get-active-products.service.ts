import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetActiveProductsService {

  constructor(private http:HttpClient) {}

  getData() {
    let url="http://localhost/ws/webbshop/src/app/api/getActiveProducts.php";
    //let url="/api/getActiveProducts.php";
    return this.http.get(url);
  }
}
