import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shared.module';

import { DynamicDivsRoutingModule } from './dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { BoxComponent } from './box/box.component';


@NgModule({
  declarations: [DynamicDivsComponent, BoxComponent],
  imports: [
    CommonModule,
    DynamicDivsRoutingModule,
    InfiniteScrollModule,
    SharedModule
  ]
})
export class DynamicDivsModule { }
