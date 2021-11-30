import { Component, OnInit } from '@angular/core';
import { GetShoppingCartService } from 'src/app/get-shopping-cart.service';
import { OrdersService } from 'src/app/orders.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public userID: number = 0;
  cart_items: Array<{productID: number, amount: number, name: string, price: number, description: string, filePath: string}> = [];
  currentPrice: number = 0;
  totalPrice: number = 0;
  shipping: number = 150;
  sale: number = 0;
  noUser = false;

  constructor(private cart:GetShoppingCartService, private router: Router, private order: OrdersService) {

    let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '');

    if (sessionUser.length >= 1 && sessionUser !== "null") {

      this.cart.getUserData(sessionUser).subscribe(data=>{
        this.userID = Object(data)[0].userID;


        this.cart.getData(Object(data)[0].userID).subscribe(data2=>{

          for (let index = 1; index <= Object(data2).length; index++) {

            this.cart.getProductData(Object(data2)[index-1].productID).subscribe(data3=>{
              this.cart_items.push({
                productID: Object(data2)[index-1].productID,
                amount: Object(data2)[index-1].amount,
                name: Object(data3)[0].name,
                price: Object(data3)[0].price,
                description: Object(data3)[0].description,
                filePath: Object(data3)[0].filePath
              });

              this.currentPrice += parseInt(Object(data3)[0].price);
              this.totalPrice = (this.currentPrice + this.shipping + this.sale);
            })
          }
        })
      })
    } else {
      this.noUser = true;
    }

  }

  reloadPage() {
    this.router.navigateByUrl('products', { skipLocationChange: true }).then(() => {
      this.router.navigate(['shopping-cart']);
    });
  }

  orderCartProducts() {

    if (this.cart_items.length > 0) {
      this.order.getCustomer(this.userID).subscribe(data => {
          console.log(data)
          this.order.createOrder(Object(data)[0].customerID).subscribe(data2 => { //CustomerID must be present.
              console.log(data2) //getOrderIDFromCustomerID
              this.order.getOrderIDFromCustomerID(Object(data)[0].customerID).subscribe(data => {
                for (let index = 1; index <= this.cart_items.length; index++) {
                  this.order.addProductToOrder(Object(this.cart_items)[index-1].productID, Object(data)[0].orderID, Object(this.cart_items)[index-1].price, Object(this.cart_items)[index-1].amount).subscribe(data => {
                  })
                }

                if (this.cart_items.length > 0) {
                  this.cart.cleanCart(this.userID)
                    .subscribe(data => {
                      console.log(data)
                      if (data == 1) {
                      } else if (data == 2) {
                      }
                      this.reloadPage();
                    })

                  alert("Din order är nu lagd!");
                }
              })
            })
        })
      }
  }

  removeItem(productID: number) {
    console.log("Remove: " + productID);

    this.cart.removeProductFromCart(productID, this.userID)
      .subscribe(data => {
        console.log(data)
        if (data == 1) {
        } else if (data == 2) {
        }
        this.reloadPage();
      })
  }

  ngOnInit(): void {
  }

}
