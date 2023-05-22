import { Component, OnInit } from '@angular/core';
import { Agenda } from '../model/agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agenda: Agenda[] = [
    {_id: '1', title: 'Audiência pública e reunião do CDM', date: '15/06/2023', time: '19:00', place: 'Salão Ouro Negro'}
  ];
  displayedColumns = ['title', 'date', 'time', 'place']

  constructor() {
    //this.agenda = [];
  }

  ngOnInit(): void{

  }

}
