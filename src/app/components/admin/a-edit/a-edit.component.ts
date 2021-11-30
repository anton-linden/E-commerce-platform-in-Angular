import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-a-edit',
  templateUrl: './a-edit.component.html',
  styleUrls: ['./a-edit.component.css']
})
export class AEditComponent implements OnInit {

  //category: Array<number> = [1, 2, 3, 4, 5];

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
  }

  saveProduct(productForm: any) {

    if (productForm.value.name) {
      if (productForm.value.price) {
        this.admin.createProduct(productForm.value.name, productForm.value.description, productForm.value.price, "testPath").subscribe(data=>{ //productForm.value.filePath
          if (data == 1) {
            alert("Product added");
            window.location.reload();
          } else {
            alert("Something went wrong, try again later");
          }
        })
      } else {
        alert("Price is missing.");
      }
    } else {
      alert("Name is missing");
    }

  }
}
