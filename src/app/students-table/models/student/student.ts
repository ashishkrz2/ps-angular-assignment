export class Student {
  name: string;
  batch: string;
  section: string;
  math: number;
  science: number;
  commerce: number;

  constructor(name: string, batch: string, section: string, math: number, science: number, commerce: number) {
    this.name = name;
    this.batch = batch;
    this.section = section;
    this.math = math;
    this.science = science;
    this.commerce = commerce;
  }
}
