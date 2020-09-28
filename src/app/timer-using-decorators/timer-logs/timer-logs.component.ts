import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerLogsComponent {
  _timeLogs: string[];

  @Input()
  set timeLogs (value) {
    this._timeLogs = value?.map(val => {
      let str: string;

      // map logs as paused or started
      if (val.isPaused) {
        str = `Paused at ${val.datestamp.toLocaleString()}`
      } else {
        str = `Started at ${val.datestamp.toLocaleString()}`
      }
      return str;
    });
  }
}
