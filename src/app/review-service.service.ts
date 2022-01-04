import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  baseURL: string = "http://localhost/webbshop/src/app/api/";
  //baseURL: string = "/api/";

  constructor(private http:HttpClient) {}
  getAllActiveProductsReviewsFromProductID(ProductID: string) { return this.http.get(this.baseURL + "getAllActiveProductsReviewsFromProductID.php?productID=" + ProductID); }

  addReview(CustomerID: number, ProductID: number, Grade: number, ReviewText: string) {
    let url = this.baseURL + "addAReview.php";
    const headers = { 'content-type': 'application/json'}

    var obj = {
      customerID: CustomerID,
      productID: ProductID,
      grade: Grade,
      reviewText: ReviewText
    };

    const body=obj;
    return this.http.post(url, body,{'headers':headers})
  }

}
