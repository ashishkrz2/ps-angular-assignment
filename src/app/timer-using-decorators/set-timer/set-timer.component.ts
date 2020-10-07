import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TimeLog } from '../models/time-log/time-log';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.scss'],
})
export class SetTimerComponent {
  pauseLogs: string[];
  timeLogs: TimeLog[];
  count: number;
  isPaused: boolean;
  isReset: boolean;

  @Input()
  set countDownValue({ count }) {
    if (count) { this.addPauseLogs(count); }
  }

  @Output() updateCountStatus = new EventEmitter<{
    count: number;
    isPaused: boolean;
  }>();
  @Output() resetCount = new EventEmitter();
  @Output() setTimeLogs = new EventEmitter();

  constructor() {
    this.pauseLogs = [];
    this.timeLogs = [];
    this.count = 0;
    this.isPaused = false;
    this.isReset = false;
  }

  // logs for start and pause with timestamp
  addTimeLogs = () => {
    this.timeLogs.push(new TimeLog(this.isPaused, new Date()));
    this.setTimeLogs.emit(this.timeLogs);
  }

  // logs for pause status
  addPauseLogs = (value) => {
    let log: string;
    if (this.isPaused) {
      log = `Pause at ${value}`;
    }
    this.pauseLogs.push(log);
    this.addTimeLogs();
  }

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
      this.isReset = false;
      this.count = value;
      this.addTimeLogs();
    } else if (!this.isReset) {
      this.isPaused = !this.isPaused;
    }
    this.updateCountStatus.emit({
      count: this.count,
      isPaused: this.isPaused,
    });
  }

  // reset values
  clearCount = () => {
    this.isReset = true;
    this.count = 0;
    this.pauseLogs.length = 0;
    this.timeLogs.length = 0;
    this.setTimeLogs.emit(this.timeLogs);
    this.resetCount.emit();
  }
}
