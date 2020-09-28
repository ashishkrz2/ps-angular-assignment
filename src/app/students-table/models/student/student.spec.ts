import { Student } from './student';

describe('Student', () => {
  it('should create an instance', () => {
    expect(new Student('Andy', '3', 'A', 30, 40, 45)).toBeTruthy();
  });
});
