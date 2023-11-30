// student.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input()
  student: Student;

  @Output()
  studentSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  studentDeleted: EventEmitter<Student> = new EventEmitter<Student>();

  constructor() { }

  ngOnInit() {
  }

  selectStudent() {
    this.studentSelected.emit(true);
  }

  deleteStudent() {
    this.studentDeleted.emit(this.student);
  }
}
