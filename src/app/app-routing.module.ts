import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentFormComponent } from './students/student-form/student-form.component';

const routes: Routes = [
  { path: 'tickets', component: TicketListComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'add-student', component: StudentFormComponent },
  { path: 'add-ticket', component: TicketFormComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
