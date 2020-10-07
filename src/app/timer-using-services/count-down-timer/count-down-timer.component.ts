import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  count: number;
  countInterval;
  private timerCountSub: any;
  private isPausedSub: any;

  constructor(private timerService: TimerService) {
    this.count = 0;
  }

  ngOnInit(): void {
    this.timerCountSub = this.timerService.timerCount.subscribe((count) => {
      if (+count) {
        if (this.countInterval) { this.pauseTimer(); } // clear existing timer
        this.startTimer();
      }
      this.count = count;
    });

    this.isPausedSub = this.timerService.isPaused.subscribe((status) => {

      // emit the intermediate count status on start and pause
      this.timerService.changeCountDown(this.count);

      // start or pause the timer based on received input
      if (status) {
        this.pauseTimer();
      } else {
        this.startTimer();
      }
    });
  }

  // start timer with interval of 1 second
  startTimer = () => {
    this.countInterval = setInterval(() => {
      if (!this.count) {
        clearInterval(this.countInterval);
      } else {
        this.count--;
      }
    }, 1000);
  }

  // clear the started interval on pause
  pauseTimer = () => {
    clearInterval(this.countInterval);
  }

  ngOnDestroy(): void {
    this.timerCountSub.unsubscribe();
    this.isPausedSub.unsubscribe();
    clearInterval(this.countInterval);
  }
}
