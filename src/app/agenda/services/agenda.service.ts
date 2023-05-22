import { Injectable } from '@angular/core';

//injeção de dependência dentro das classes do angular
@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }

  list() {
    return [
      {_id: '1', title: 'Audiência pública e reunião do CDM', date: '15/06/2023', time: '19:00', place: 'Salão Ouro Negro'}
    ];
  }
}
