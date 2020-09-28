import { Component, OnInit } from '@angular/core';

import { TimeLog } from '../models/time-log/time-log';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.scss'],
})
export class SetTimerComponent implements OnInit {
  pauseLogs: string[];
  timeLogs: TimeLog[];
  count: number;
  isPaused: boolean;
  isReset: boolean;

  constructor(private timerService: TimerService) {
    this.pauseLogs = [];
    this.timeLogs = [];
    this.count = 0;
    this.isPaused = false;
    this.isReset = false;
  }

  ngOnInit(): void {
    this.timerService.pauseLogs.subscribe((logs: string[]) => (this.pauseLogs = logs));
    this.timerService.timeLogs.subscribe((logs: TimeLog[]) => (this.timeLogs = logs));
    this.timerService.countDown.subscribe((count: number) => (this.count = count));
    this.timerService.isPaused.subscribe((status: boolean) => {
      this.isPaused = status;

      // logs for pause status
      if (this.isPaused) {
        let log: string = `Pause at ${this.count}`;
        this.pauseLogs.push(log);
      }
      this.count && this.addTimeLogs(); // time log will not happen in case of invalid value
    });
    this.timerService.isReset.subscribe((status) => (this.isReset = status));
  }

  // logs for start and pause with timestamp
  addTimeLogs = () => {
    this.timeLogs.push(new TimeLog(this.isPaused, new Date()));
    this.timerService.changeTimeLogs(this.timeLogs);
  };

  setCount = (value) => {

    // allow valid timer values only 
    if (value && !/^[1-9][0-9]*$/.test(value)) {
      return;
    }

    // clear existing timer 
    if (value && this.count) {
      this.clearCount();
    }

    if (value) {
      this.timerService.changeIsReset(false);
      this.timerService.changeTimerCount(value);
      this.addTimeLogs();
    } else if (!this.isReset) {
      this.timerService.changeIsPaused(!this.isPaused);
    }
  };

  // reset values
  clearCount = () => {
    this.timerService.changeIsReset(true);
    this.timerService.changeTimerCount(0);
    this.timerService.changePauseLogs([]);
    this.timerService.changeTimeLogs([]);
  };
}
