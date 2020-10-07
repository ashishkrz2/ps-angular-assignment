import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TimeLog } from '../../models/time-log/time-log';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private timerCountSource = new BehaviorSubject<number>(0); // intermediate count status
  private countDownSource = new BehaviorSubject<number>(0); // set timer
  private pauseLogsSource = new BehaviorSubject<string[]>([]); // pause value log
  private timeLogsSource = new BehaviorSubject<TimeLog[]>([]); // time logs for start and pause
  private isPausedSource = new BehaviorSubject<boolean>(false); // maintain intermediate timer status
  private isResetSource = new BehaviorSubject<boolean>(true); // reset timer

  timerCount = this.timerCountSource.asObservable();
  countDown = this.countDownSource.asObservable();
  pauseLogs = this.pauseLogsSource.asObservable();
  timeLogs = this.timeLogsSource.asObservable();
  isPaused = this.isPausedSource.asObservable();
  isReset = this.isResetSource.asObservable();

  constructor() { }

  changeTimerCount = (count: number) => {
    this.timerCountSource.next(count);
  }

  changeCountDown = (count: number) => {
    this.countDownSource.next(count);
  }

  changePauseLogs = (values: string[]) => {
    this.pauseLogsSource.next(values);
  }

  changeTimeLogs = (values: TimeLog[]) => {
    this.timeLogsSource.next(values);
  }

  changeIsPaused = (status: boolean) => {
    this.isPausedSource.next(status);
  }

  changeIsReset = (status: boolean) => {
    this.isResetSource.next(status);
  }
}
