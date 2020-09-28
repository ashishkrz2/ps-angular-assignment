import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerUsingServicesComponent } from './timer-using-services.component';

const routes: Routes = [{ path: '', component: TimerUsingServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerUsingServicesRoutingModule { }
