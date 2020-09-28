import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-timer-clicks',
  templateUrl: './timer-clicks.component.html',
  styleUrls: ['./timer-clicks.component.scss'],
})
export class TimerClicksComponent implements OnInit {
  startedCount: number;
  pausedCount: number;

  constructor(private timerService: TimerService) {
    this.startedCount = 0;
    this.pausedCount = 0;
  }

  ngOnInit(): void {
    this.timerService.timeLogs.subscribe((logs) => {
      this.startedCount = 0;
      this.pausedCount = 0;

      // set count based on start and pause clicks
      logs?.forEach((val) => {
        if (val.isPaused) {
          this.pausedCount++;
        } else {
          this.startedCount++;
        }
      });
    });
  }
}
