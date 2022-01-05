import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-a-product-listing-page',
  templateUrl: './a-product-listing-page.component.html',
  styleUrls: ['./a-product-listing-page.component.css']
})
export class AProductListingPageComponent implements OnInit {

  products: Array<{ProductID: number, Name: string, Price: number, Amount: number, Status: number, FilePath: string}> = [];

  constructor(private productHandler: ProductService) { }

  getAllProducts() {
    this.products = [];

    this.productHandler.getAllProducts().subscribe(data=>{

      for (let i = 0; i < Object(data).length; i++) {
        this.products.push({
          ProductID: Object(data)[i].productID,
          Name: Object(data)[i].name,
          Price: Object(data)[i].price,
          Amount: Object(data)[i].amount,
          Status: Object(data)[i].hidden,
          FilePath: Object(data)[i].filePath,
        });
      }
      console.log(this.products);

    })
  }

  deleteProduct(ProductID: number) {
    // TODO: Implment.
  }

  editProduct(ProductID: number) {
    // TODO: Implement with a new GUI.
  }

  ngOnInit(): void { this.getAllProducts(); }
}
