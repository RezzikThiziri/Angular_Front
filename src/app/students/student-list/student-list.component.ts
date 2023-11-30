import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/ticket/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public studentList: Student[] = [];

  constructor(public studentService: StudentService) {
    this.studentService.getStudents().subscribe((students) => this.studentList = students);
  }

  ngOnInit() {
  }
  
  studentSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  deleteStudent(student: Student) {
    // Appelle le service pour supprimer l'étudiant
    console.log("sudent_ to delee : ", student);
    this.studentService.deleteStudent(student.id);
  }

}
