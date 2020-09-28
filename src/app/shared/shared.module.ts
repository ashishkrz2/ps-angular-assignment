import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    SortPipe,
    FilterPipe,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortPipe,
    FilterPipe,
    ButtonComponent
  ]
})
export class SharedModule { }
