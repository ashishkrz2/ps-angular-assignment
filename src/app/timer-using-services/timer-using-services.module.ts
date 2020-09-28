import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TimerUsingServicesRoutingModule } from './timer-using-services-routing.module';
import { TimerUsingServicesComponent } from './timer-using-services.component';
import { SetTimerComponent } from './set-timer/set-timer.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerClicksComponent } from './timer-clicks/timer-clicks.component';


@NgModule({
  declarations: [TimerUsingServicesComponent, SetTimerComponent, CountDownTimerComponent, TimerLogsComponent, TimerClicksComponent],
  imports: [
    CommonModule,
    TimerUsingServicesRoutingModule,
    SharedModule
  ]
})
export class TimerUsingServicesModule { }
