import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TimeLog } from '../models/time-log/time-log';

@Component({
  selector: 'app-timer-clicks',
  templateUrl: './timer-clicks.component.html',
  styleUrls: ['./timer-clicks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerClicksComponent {
  startedCount;
  pausedCount;

  @Input()
  set timeLogs(value: TimeLog[]) {
    this.startedCount = 0;
    this.pausedCount = 0;

    // set count based on start and pause clicks
    value?.forEach(val => {
      if (val.isPaused) {
        this.pausedCount++;
      } else {
        this.startedCount++;
      }
    });
  }
}
