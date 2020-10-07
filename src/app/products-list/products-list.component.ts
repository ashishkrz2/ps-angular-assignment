import { Component } from '@angular/core';

import { Product } from './models/product/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[];
  isListView: boolean;
  // filter keys
  field: string;
  filter: string;
  isMinMax: boolean;

  constructor() {
    // create 40 products with price ranging from $110 to $500
    this.products = Array.from({ length: 40 }, (_, i) => {
      return new Product(i + 1, 'Product', 100 + (i + 1) * 10);
    });
    this.isListView = false;
    this.field = 'price'; // default field on which filter happens
    this.isMinMax = true; // filter values based on min max comparison
  }

  // set filter requirement
  setFilter = (value) => {
    this.filter = value;
  }
}
