import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosFormComponent } from './contatos-form/contatos-form.component';


@NgModule({
  declarations: [
    ContatosFormComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
