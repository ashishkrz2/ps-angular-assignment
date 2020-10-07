import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss'],
})
export class TimerLogsComponent implements OnInit, OnDestroy {
  timeLogs: string[];
  private timeLogsSub: any;

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timeLogsSub = this.timerService.timeLogs.subscribe((logs) => {
      this.timeLogs = logs?.map((val) => {
        let str: string;

        // map logs as paused or started
        if (val.isPaused) {
          str = `Paused at ${val.datestamp.toLocaleString()}`;
        } else {
          str = `Started at ${val.datestamp.toLocaleString()}`;
        }
        return str;
      });
    });
  }

  ngOnDestroy(): void {
    this.timeLogsSub.unsubscribe();
  }
}
