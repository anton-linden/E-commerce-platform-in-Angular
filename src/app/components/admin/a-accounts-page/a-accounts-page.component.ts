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

  deleteUser(UserID: number) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    this.users.deleteUserWithUserID(UserID).subscribe(data=>{
      if (data == 2) return alert("Failed to delete user");

      this.accounts = [];
      alert("User was successfully deleted. Page will reload.");
      this.getAllAccounts();
    })
  }

  getCustomerFromUserID() {
    // TODO: Write function.
    // PHP already exists since we take one user at the time.
    // TS & HTML focus.
  }

}
