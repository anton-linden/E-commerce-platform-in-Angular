import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-a-accounts-page',
  templateUrl: './a-accounts-page.component.html',
  styleUrls: ['./a-accounts-page.component.css']
})
export class AAccountsPageComponent implements OnInit {

  accounts: Array<{UserID: number, Username: string, Role: string}> = [];

  constructor(private users: UserService) { }

  ngOnInit(): void {this.getAllAccounts();}

  getAllAccounts() {
    this.users.getAllUsers().subscribe(data=>{

      for (let i = 0; i < Object(data).length; i++) {
        console.log(Object(data)[i].role, Object(data)[i].role != 0);

        if (Object(data)[i].role > 0) {
          this.users.getRoleFromRoleID(Object(data)[i].role).subscribe(data2=>{
            this.accounts.push({
              UserID: Object(data)[i].userID,
              Username: Object(data)[i].username,
              Role: Object(data2)[0].roleName
            });
          });
        } else {
          this.accounts.push({
            UserID: Object(data)[i].userID,
            Username: Object(data)[i].username,
            Role: "User"
          });
        }
      }
    })
  }

  deleteUser() {
    // TODO: Write function. PHP, TS & HTML.
  }

  getCustomerFromUserID() {
    // TODO: Write function.
    // PHP already exists since we take one user at the time.
    // TS & HTML focus.
  }

}
