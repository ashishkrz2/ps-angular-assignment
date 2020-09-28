import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [BannerComponent, BoxComponent],
  imports: [
    CommonModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
