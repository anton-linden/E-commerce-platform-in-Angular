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

  defaultImageFilePath: string = "assets/200x200.svg";
  public userID: number = 0;
  cart_items: Array<{productsInCartID: number, productID: number, amount: number, name: string, price: number, description: string, filePath: string, maxAmount: number}> = [];
  currentPrice: number = 0;
  totalPrice: number = 0;
  shipping: number = 150;
  sale: number = 0;
  noUser: boolean = false;
  max: number = 5; //test value.

  constructor(private cart:GetShoppingCartService, private router: Router, private order: OrdersService) {

    let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '');

    if (sessionUser.length >= 1 && sessionUser !== "null") {

      this.cart.getUserData(sessionUser).subscribe(data=>{
        this.userID = Object(data)[0].userID;


        this.cart.getData(Object(data)[0].userID).subscribe(data2=>{

          for (let index = 1; index <= Object(data2).length; index++) {

            this.cart.getProductData(Object(data2)[index-1].productID).subscribe(data3=>{

              let filePath: string = this.defaultImageFilePath;
              if (Object(data3)[0].filePath.length > 0) filePath = Object(data3)[0].filePath;

              this.cart_items.push({
                productsInCartID: Object(data2)[index-1].productsInCartID,
                productID: Object(data2)[index-1].productID,
                amount: +Object(data2)[index-1].amount,
                name: Object(data3)[0].name,
                price: Object(data3)[0].price,
                description: Object(data3)[0].description,
                filePath: filePath,
                maxAmount: +Object(data3)[0].amount
              });

              this.cart_items = this.cart_items.sort((a, b) => b.productID - a.productID);  //Sort the array after productID to avoid issues.

              this.currentPrice += (parseInt(Object(data3)[0].price) * parseInt(Object(data2)[index-1].amount));
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
          this.order.createOrder(Object(data)[0].customerID).subscribe(data2 => { //CustomerID must be present.
              this.order.getOrderIDFromCustomerID(Object(data)[0].customerID).subscribe(data => {
                for (let index = 1; index <= this.cart_items.length; index++) {
                  this.order.addProductToOrder(Object(this.cart_items)[index-1].productID, Object(data)[0].orderID, Object(this.cart_items)[index-1].price, Object(this.cart_items)[index-1].amount).subscribe(data => {
                  })
                }
                if (this.cart_items.length > 0) {
                  this.cart.cleanCart(this.userID)
                    .subscribe(data => {
                      this.reloadPage();
                    })
                  alert("Din order är nu lagd!");
                }
              })
            })
        })
      }
  }

  removeItem(productID: number) { this.cart.removeProductFromCart(productID, this.userID).subscribe(data => { this.reloadPage(); }) }

  callchangeAmountOfProductInCart(ProductsInCartID: number, Amount: number) {
    this.cart.changeAmountOfProductInCart(ProductsInCartID, Amount).subscribe(data => {
        this.reloadPage();
      })
  }

  increaseAmountOfProductInCart(ProductsInCartID: number, Amount: number, MaxAmount: number) {
    if (Amount == MaxAmount) return alert("There isn't enough of the product left in storage.");
    if (Amount > MaxAmount) Amount = MaxAmount - 1;
    Amount++;
    this.callchangeAmountOfProductInCart(ProductsInCartID, Amount);
  }

  decreaseAmountOfProductInCart(ProductsInCartID: number, Amount: number, ProductID: number, MaxAmount: number) {
    if (Amount <= 1) this.removeItem(ProductID)
    if (Amount > MaxAmount) Amount = MaxAmount - 1;
    Amount--;
    this.callchangeAmountOfProductInCart(ProductsInCartID, Amount);
  }

  ngOnInit(): void {}
}
