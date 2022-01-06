import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-a-edit',
  templateUrl: './a-edit.component.html',
  styleUrls: ['./a-edit.component.css']
})
export class AEditComponent implements OnInit {

  defaultImageFilePath: string = "assets/200x200.svg";

  constructor(private admin: AdminService) {}
  ngOnInit(): void {}

  saveProduct(productForm: any) {
    if (productForm.value.status == "") productForm.value.status = false;
    if (!productForm.value.name) return alert("Name is missing");
    if (!productForm.value.price) return alert("Price is missing.");
    if (productForm.value.amount == null || productForm.value.amount.length < 1) return alert("Amount is missing.");
    if (typeof productForm.value.status !== "boolean") return alert("Status was incorrect.");
    if (typeof productForm.value.filePath !== "string") return alert("File path was incorrect.");
    if (productForm.value.filePath.length < 1) productForm.value.filePath = this.defaultImageFilePath; //Sets stock image.

    this.admin.createProduct(productForm.value.name, productForm.value.description, productForm.value.price, productForm.value.filePath, productForm.value.amount, productForm.value.status).subscribe(data=>{ //productForm.value.filePath
      (data == 1) ? alert("Product added") : alert("Something went wrong, try again later");
      window.location.reload();
    })
  }
}
