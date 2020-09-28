import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TimerUsingDecoratorsRoutingModule } from './timer-using-decorators-routing.module';
import { TimerUsingDecoratorsComponent } from './timer-using-decorators.component';
import { SetTimerComponent } from './set-timer/set-timer.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerClicksComponent } from './timer-clicks/timer-clicks.component';


@NgModule({
  declarations: [TimerUsingDecoratorsComponent, SetTimerComponent, CountDownTimerComponent, TimerLogsComponent, TimerClicksComponent],
  imports: [
    CommonModule,
    TimerUsingDecoratorsRoutingModule,
    SharedModule
  ]
})
export class TimerUsingDecoratorsModule { }
