import { Component, OnInit } from '@angular/core';
import { GetSelectedProductService } from 'src/app/get-selected-product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { GetShoppingCartService } from 'src/app/get-shopping-cart.service';
import { ReviewServiceService } from 'src/app/review-service.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  reviewsArray = new Array();
  reviewing: boolean = false;

  scoreArray = new Array(0, 0, 0, 0, 0);
  averageGrade: number = 0;

  public id = "";

  product: Array<{productID: number, name: string, description: string, price: number, filePath: string, amount: number}> = [];

  constructor(private _Activatedroute:ActivatedRoute, private productGet:GetSelectedProductService, private cart:GetShoppingCartService, private router: Router, private review: ReviewServiceService, private user: UserService) {
    this._Activatedroute.paramMap.subscribe(params => {

      var id: string = JSON.stringify(params.get('id')).replace(/['"]+/g, '');

      if (id.length >= 1 && id != null) {
        this.id = id;

        this.productGet.getData(id).subscribe(data=>{
          for (let index = 0; this.product.length < Object(data).length; index++) {
            this.product.push({
              productID: Object(data)[index].productID,
              name: Object(data)[index].name,
              amount: +Object(data)[index].amount,
              description: Object(data)[index].description,
              price: Object(data)[index].price,
              filePath: Object(data)[index].filePath });
          }
        })
      }
    });

    if (!this.isReviewing())
      this.getReviews();
  }

  isReviewing() { if (JSON.stringify(sessionStorage.getItem('reviewing')).replace(/['"]+/g, '') == "TRUE") { return true; } return false; }

  addReview(value: any) {
    if (value.star == '') { alert("No stars selected."); return; }
    if (+value.star > 5 || +value.star < 1) { console.warn("Stars are invalid."); return; }

    this.user.getCustomerIDFromUsername(this.getUserFromSessionStorage()).subscribe(data=>{
      console.log(+this.product[0].productID);

        this.review.addReview(+Object(data).customerID, +this.product[0].productID, +value.star, value.reviewTextArea).subscribe(data=>{
          if (data == 2) { console.warn("An error has occured while INSERTING"); alert("Your review couldn't be registred."); return; }
          sessionStorage.removeItem("reviewing");
          window.location.reload();
        });
    });

  }

  getReviews() {
    let totalScore = 0;

    this.review.getAllActiveProductsReviewsFromProductID(this.id).subscribe(data=>{
      const reviewArray: any[] = Array.of(Object.values(data))[0];

      for (let i = 0; i < reviewArray.length; i++) {
        this.reviewsArray.push([reviewArray[i].reviewText, reviewArray[i].grade]);
        totalScore += +reviewArray[i].grade;
        this.scoreArray[+reviewArray[i].grade-1]++;
      }

      this.averageGrade = totalScore / reviewArray.length;
    })
  }

  getUserFromSessionStorage() {
    if (sessionStorage.getItem('Username')) {
      let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username'));

      if (sessionUser != "null") {
        if (sessionUser.length >= 1) {
          sessionUser = sessionUser.replace(/['"]+/g, '');
          return sessionUser.toString();
        }
      }
    }
    return "null";
  }

  addToCart() {
  if (sessionStorage.getItem('Username') != null) {
    let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '');

      this.cart.getUserData(sessionUser).subscribe(data=>{
        let userID = Object(data)[0].userID;

        this.cart.addProductToCart(+this.product[0].productID, +userID)
          .subscribe(data => {
            if (data == 1) {
              this.router.navigate(['shopping-cart']);  //Goto cart
            } else if (data == 2) {
              this.router.navigate(['shopping-cart']);  //Decline cart
            }
          })
      })
    } else {
      alert("You need to be signed in to order a product at the moment.");
    }
  }

  ngOnInit(): void {
    this.reviewing = this.isReviewing();
  }

}
