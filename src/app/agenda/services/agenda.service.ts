import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Agenda } from '../model/agenda';

//injeção de dependência dentro das classes do angular
@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private readonly API = '/assets/agenda.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.API);
  }
}
