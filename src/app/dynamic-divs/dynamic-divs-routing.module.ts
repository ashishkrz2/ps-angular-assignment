import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicDivsComponent } from './dynamic-divs.component';

const routes: Routes = [{ path: '', component: DynamicDivsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivsRoutingModule { }
