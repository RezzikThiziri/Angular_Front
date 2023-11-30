import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../../services/ticket/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public studentForm: FormGroup;
  public studentList:Student[]=[];
 

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.formBuilder.group({
      //studentId: [''],
      FirstName: [''],
      LastName: ['']
    }) ; 
    this.studentService.students$.subscribe((students)=>{
      console.log('Students', students);
      this.studentList = students
    }) ; 
     this.studentService.getStudents(); 
    
  }

  ngOnInit() {
  }

  addStudent():void {
    let student = this.studentForm.getRawValue() as Student;
    console.log(student);
    
    this.studentService.addStudent(student);
  }
}
