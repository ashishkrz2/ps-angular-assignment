import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { StudentsTableRoutingModule } from './students-table-routing.module';
import { StudentsTableComponent } from './students-table.component';


@NgModule({
  declarations: [StudentsTableComponent],
  imports: [
    CommonModule,
    StudentsTableRoutingModule,
    SharedModule
  ]
})
export class StudentsTableModule { }
