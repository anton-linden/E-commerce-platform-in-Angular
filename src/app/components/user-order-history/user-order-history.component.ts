import { Component, OnInit } from '@angular/core';
import { GetShoppingCartService } from 'src/app/get-shopping-cart.service';
import { OrdersService } from 'src/app/orders.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-user-order-history',
  templateUrl: './user-order-history.component.html',
  styleUrls: ['./user-order-history.component.css']
})
export class UserOrderHistoryComponent implements OnInit {

  orders: Array<{OrderID: number, products: Array<{productID: number, amount: number, price: number, name: string, description: string, filePath: string}>}> = [];

  constructor(private cart:GetShoppingCartService, private order: OrdersService, private router: Router) { // This code is a mess, split into functions and maybe merge some php files.

    let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '');

    if (sessionUser.length >= 1 && sessionUser !== "null") {

      this.cart.getUserData(sessionUser).subscribe(data=>{                                      //Get userID from Username
        this.order.getCustomer(Object(data)[0].userID).subscribe(data=>{                        //Get customerID from UserID
          this.order.getAllOrdersFromCustomerID(Object(data)[0].customerID).subscribe(data=>{   //Get all orders from a customerID

            for (let index = 1; index <= Object(data).length; index++) {

              let ord: Array<{productID: number, amount: number, price: number, name: string, description: string, filePath: string}> = [];

                this.order.getOrderFromOrderID(Object(data)[index-1].orderID).subscribe(data2=>{

                  for (let inx = 1; inx <= Object(data2).length; inx++) {
                    this.order.getProductFromProductID(Object(data2)[inx-1].productID).subscribe(data3=>{
                      ord.push({
                        productID: Object(data2)[inx-1].productID,
                        amount: Object(data2)[inx-1].amount,
                        price: Object(data2)[inx-1].price,
                        name: Object(data3)[0].name,
                        description: Object(data3)[0].description,
                        filePath: Object(data3)[0].filePath
                      });
                    })
                  }
                })

                this.orders.push({
                  OrderID: Object(data)[index-1].orderID,
                  products: ord
                });
            }
          })
        })
      })
    }
  }

  navigateToRateProductView(ProductID: number) { sessionStorage.setItem('reviewing', "TRUE"); }
  ngOnInit(): void {}
}
