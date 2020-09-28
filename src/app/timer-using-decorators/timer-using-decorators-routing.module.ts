import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerUsingDecoratorsComponent } from './timer-using-decorators.component';

const routes: Routes = [{ path: '', component: TimerUsingDecoratorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerUsingDecoratorsRoutingModule { }
