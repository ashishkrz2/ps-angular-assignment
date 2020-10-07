import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-timer-clicks',
  templateUrl: './timer-clicks.component.html',
  styleUrls: ['./timer-clicks.component.scss'],
})
export class TimerClicksComponent implements OnInit, OnDestroy {
  startedCount: number;
  pausedCount: number;
  private timeLogsSub: any;

  constructor(private timerService: TimerService) {
    this.startedCount = 0;
    this.pausedCount = 0;
  }

  ngOnInit(): void {
    this.timeLogsSub = this.timerService.timeLogs.subscribe((logs) => {
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

  ngOnDestroy(): void {
    this.timeLogsSub.unsubscribe();
  }
}
