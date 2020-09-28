import { Component } from '@angular/core';

import { TimeLog } from './models/time-log/time-log';

@Component({
  selector: 'app-timer-using-decorators',
  templateUrl: './timer-using-decorators.component.html',
  styleUrls: ['./timer-using-decorators.component.scss']
})
export class TimerUsingDecoratorsComponent {
  timeLogs: TimeLog[];
  count: number;
  isPaused: boolean;
  countDownValue;

  constructor() {
    this.count = 0;
    this.isPaused = false;
  }

  updateCountStatus = ({count, isPaused}) => {
    this.count = count;
    this.isPaused = isPaused;
  }

  setCountStatus = (count) => {
    this.countDownValue = { count };
  }

  setTimeLogs = (timeLogs) => {
    this.timeLogs = [...timeLogs];
  }

  resetCount = () => {
    this.count = 0;
  }

}
