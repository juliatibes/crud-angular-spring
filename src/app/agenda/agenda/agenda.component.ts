import { AgendaService } from './../services/agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from '../model/agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agenda: Agenda[] = [];
  displayedColumns = ['title', 'date', 'time', 'place'];

  // AgendaService: AgendaService;

  constructor(private AgendaService: AgendaService) {
    //this.agenda = [];
    // this.AgendaService = new AgendaService();
    this.agenda = this.AgendaService.list();
  }

  ngOnInit(): void{

  }

}
