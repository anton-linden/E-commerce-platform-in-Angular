import { Component, OnInit } from '@angular/core';
import { GetSelectedProductService } from 'src/app/get-selected-product.service';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { GetShoppingCartService } from 'src/app/get-shopping-cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  public id = "";

  product: Array<{productID: number, name: string, description: string, price: number, filePath: string}> = [];

  constructor(private _Activatedroute:ActivatedRoute, private productGet:GetSelectedProductService, private cart:GetShoppingCartService) {
    this._Activatedroute.paramMap.subscribe(params => {

      var id: string = JSON.stringify(params.get('id')).replace(/['"]+/g, '');

      if (id.length >= 1 && id != null) {
        this.id = id;

        this.productGet.getData(id).subscribe(data=>{
          for (let index = 0; this.product.length < Object(data).length; index++) {
            this.product.push({
              productID: Object(data)[index].productID,
              name: Object(data)[index].name,
              description: Object(data)[index].description,
              price: Object(data)[index].price,
              filePath: Object(data)[index].filePath });
          }
        })
      }
    });
  }

  addToCart() {
    let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '');

    this.cart.getUserData(sessionUser).subscribe(data=>{
      let userID = Object(data)[0].userID;

      this.cart.addProductToCart(+this.product[0].productID, +userID)
        .subscribe(data => {
          console.log(data)
          if (data == 1) {
            //Goto cart
          } else if (data == 2) {
            //Decline cart
          }
          console.log(data);
        })
    })
  }

  ngOnInit(): void {
  }

}
