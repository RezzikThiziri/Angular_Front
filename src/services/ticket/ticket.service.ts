import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
  }
   // l'ajout de la fonction de suppression 
  
   deleteTicket(ticket: Ticket){
    const index = this.ticketList.indexOf(ticket);//rechercher l'index du ticket dans le tableau 
    if (index !== -1) {
      this.ticketList.splice(index, 1); // Supprimer le ticket de la liste
     
    }
    this.tickets$.next(this.ticketList); // Mettre à jour l'observable
    
   }
//modification de la fonction de suppression pour archiver les tickets au lieu de les supprimer 
   archiveTicket(ticket: Ticket) {
    const index = this.ticketList.indexOf(ticket);
    if (index !== -1) {
      this.ticketList[index].archived = true; // Marquer le ticket comme archivé
     
    }
    this.tickets$.next(this.ticketList);
  }
  
}
