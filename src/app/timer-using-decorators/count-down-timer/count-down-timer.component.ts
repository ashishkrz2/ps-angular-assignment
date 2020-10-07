import {
  Component,
  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss'],
})
export class CountDownTimerComponent {
  counter: number;
  countInterval;

  constructor() {
    this.counter = 0;
  }

  // emit the intermediate count status on start and pause
  @Output() setCountStatus = new EventEmitter<number>();

  @Input()
  set count(value: number) {
    if (+value) {
      if (this.countInterval) { this.pauseTimer(); } // clear existing timer
      this.startTimer();
    }
    this.counter = value;
  }

  @Input()
  set isPaused(status: boolean) {
    this.setCountStatus.emit(this.counter);

    // start or pause the timer based on received input
    if (status) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  // start timer with interval of 1 second
  startTimer = () => {
    this.countInterval = setInterval(() => {
      if (!this.counter) {
        clearInterval(this.countInterval);
      } else {
        this.counter--;
      }
    }, 1000);
  }

  // clear the started interval on pause
  pauseTimer = () => {
    clearInterval(this.countInterval);
  }
}
