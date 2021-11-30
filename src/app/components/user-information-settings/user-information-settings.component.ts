import { Component, OnInit } from '@angular/core';
import { GetShoppingCartService } from 'src/app/get-shopping-cart.service';
import { OrdersService } from 'src/app/orders.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-information-settings',
  templateUrl: './user-information-settings.component.html',
  styleUrls: ['./user-information-settings.component.css']
})
export class UserInformationSettingsComponent implements OnInit {

  customer: Array<{adress: string, city: string, email: string, forename: string, lastname: string, phoneNumber: string, postalCode: string}> = [];
  customerID: number = 0;

  constructor(private cart:GetShoppingCartService, private order: OrdersService) {

    let sessionUser: string = JSON.stringify(sessionStorage.getItem('Username')).replace(/['"]+/g, '');

    if (sessionUser.length >= 1 && sessionUser !== "null") {

      this.cart.getUserData(sessionUser).subscribe(data=>{
          this.order.getCustomer(Object(data)[0].userID).subscribe(data=>{ // getCustomerID from UserID from sessionStorage
            this.customerID = Object(data)[0].customerID;
            this.customer.push({
              adress: Object(data)[0].adress,
              city: Object(data)[0].city,
              email: Object(data)[0].email,
              forename: Object(data)[0].forename,
              lastname: Object(data)[0].lastname,
              phoneNumber: Object(data)[0].phoneNumber,
              postalCode: Object(data)[0].postalCode
            });
          })
        })

        console.log(this.customer);
    }
  }

  ngOnInit(): void {
  }

  saveInformation(saveInformation: any) {

    if (this.customerID != 0) {

      var obj = {
        customerID: this.customerID,
        email: saveInformation.value.email,
        phoneNumber: saveInformation.value.phoneNumber,
        adress: saveInformation.value.adress,
        city: saveInformation.value.city,
        postalCode: saveInformation.value.postalCode,
        forename: saveInformation.value.forename,
        lastname: saveInformation.value.lastname
      };

      this.order.updateCustomer(obj).subscribe(data=>{
        if (data == 1) {
          alert("Information successfully updated!");
        } else {
          alert("Failed to update information.");
        }
      })
    }
  }

}
