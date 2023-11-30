import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  toggleDisplayArchived() {
    this.displayTicketArchived = !this.displayTicketArchived;
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }
   
  deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket); // Appel de la fonction du service
  }

  archiveTicket(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket); // Appel de la fonction du service
}
}