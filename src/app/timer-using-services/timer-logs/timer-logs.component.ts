import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss'],
})
export class TimerLogsComponent implements OnInit {
  timeLogs: string[];

  constructor(private timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.timeLogs.subscribe((logs) => {
      console.log("Changed recvd", logs);
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
}
