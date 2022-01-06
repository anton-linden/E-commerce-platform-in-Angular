import { Component, OnInit } from '@angular/core';
import { GetActiveProductsService } from 'src/app/get-active-products.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  defaultImageFilePath: string = "assets/200x200.svg";
  products: Array<{productID: number, name: string, description: string, price: number, filePath: string}> = [];

  constructor(private productGet:GetActiveProductsService) {
    this.productGet.getData().subscribe(data=>{
      for (let index = 0; this.products.length < Object(data).length; index++) {

        let filePath: string = this.defaultImageFilePath;
        if (Object(data)[index].filePath.length > 0) filePath = Object(data)[index].filePath;

        this.products.push({
          productID: Object(data)[index].productID,
          name: Object(data)[index].name,
          description: Object(data)[index].description,
          price: Object(data)[index].price,
          filePath: filePath 
        });
      }
    })
  }

  ngOnInit(): void {}
}

//type ProductsArr = Array<{ id: number, name: string, description: string, price: number, filePath: string }>;
