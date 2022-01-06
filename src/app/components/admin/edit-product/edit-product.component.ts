import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  defaultImageFilePath: string = "assets/200x200.svg";
  pid: number = 0; //ProductID of current product.
  status: number = 0;
  products: Array<{Name: string, Description: string, Price: number, Amount: number, FilePath: string}> = [];

  constructor(private admin: AdminService, private _Activatedroute:ActivatedRoute, private route: Router) { }
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.pid = +JSON.stringify(params.get('productID')).replace(/['"]+/g, '');
      this.getProductInformation(+JSON.stringify(params.get('productID')).replace(/['"]+/g, ''));
    })
  }

  getProductInformation(ProductID: number) {
    this.admin.getProductInformation(ProductID).subscribe(data=>{
      this.status = Object(data)[0].hidden;

      this.products.push({
        Name: Object(data)[0].name,
        Description: Object(data)[0].description,
        Price: Object(data)[0].price,
        Amount: Object(data)[0].amount,
        FilePath: Object(data)[0].filePath
      });
    })
  }

  saveProduct(productForm: any) {
    if (!productForm.value.name) return alert("Name is missing");
    if (!productForm.value.price) return alert("Price is missing.");
    if (productForm.value.amount == null || productForm.value.amount.length < 1) return alert("Amount is missing.");
    if (typeof productForm.value.filePath !== "string") return alert("File path was incorrect.");
    if (productForm.value.filePath.length < 1) productForm.value.filePath = this.defaultImageFilePath; //Sets stock image.

    this.admin.updateProduct(this.pid, productForm.value.name, productForm.value.description, productForm.value.price, productForm.value.filePath, productForm.value.amount, this.status).subscribe(data=>{ //productForm.value.filePath
      (data == 1) ? alert("Product updated!") : alert("Something went wrong, try again later");
      this.route.navigateByUrl('admin-product-listing-page');
    })
  }
}
