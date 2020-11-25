import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productList: Product[] = []

  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

}
