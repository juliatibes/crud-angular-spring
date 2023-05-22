import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';



@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    AppMaterialModule
  ]
})
export class AgendaModule { }
