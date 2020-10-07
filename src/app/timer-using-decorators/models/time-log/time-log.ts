export class TimeLog {
  isPaused: boolean;
  datestamp: Date;

  constructor(isPaused: boolean, datestamp: Date) {
    this.isPaused = isPaused;
    this.datestamp = datestamp;
  }
}
