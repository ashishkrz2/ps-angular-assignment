import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    SharedModule
  ]
})
export class ProductsListModule { }
