import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket} from '../../../models/ticket';
import {Student} from '../../../models/student'; 
import { StudentService } from '../../../services/ticket/student.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;

  public students: Student[];

  public majors: string[] = ['SI', 'GE','GB','GM','GC','Medicine','Math']; 

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    // Form creation
    //this.students = this.studentService.getStudents(); // Récupérez la liste des étudiants
     
    this.studentService.getStudents().subscribe(
      (students: Student[]) => {
        this.students = students;
      },
      (error) => {
        console.error('Erreur lors de la récupération des étudiants :', error);
      }
    );

    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      id: [''] // Ajoutez le champ id au formulaire 
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
    
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    //ticketToCreate.student = 'Me';
    const id = this.ticketForm.get('id').value;
    let student = this.students.find ((student) => student.id == id);
    // console.log(student);
    ticketToCreate.student = student;
    this.ticketService.addTicket(ticketToCreate);
  }

}
