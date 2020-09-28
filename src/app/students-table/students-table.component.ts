import { Component, OnInit } from '@angular/core';

import { Student } from './models/student/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  students: Student[];

  // for accessing object property in template
  Object = Object;

  // sort table data keys
  field: string;
  order: string;

  constructor() {
    this.field = 'name';
    this.order = 'default';
  }

  ngOnInit(): void {
    this.students = [
      new Student('Cindy', '3', 'A', 89, 65, 78),
      new Student('Andy', '3', 'B', 13, 55, 70),
      new Student('Dev', '3', 'A', 59, 75, 18),
      new Student('Ester', '3', 'C', 39, 45, 98),
      new Student('Beth', '3', 'D', 49, 75, 48)
    ];
  }

  sortData = (val) => {
    const sortField = val.target.innerHTML;
    if (sortField === this.field) {
      
      // maintain sorting order sequence
      switch (this.order) {
        case 'default': this.order = 'asc'; break;
        case 'asc': this.order = 'desc'; break;
        case 'desc': this.order = 'default'; break;
        default: this.order = 'default';
      }
    } else {
      this.order = 'asc';
    }
    this.field = sortField;
  }
}
