import { TimeLog } from './time-log';

describe('TimeLog', () => {
  it('should create an instance', () => {
    expect(new TimeLog(false, new Date())).toBeTruthy();
  });
});
