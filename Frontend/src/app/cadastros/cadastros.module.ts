import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroTutorComponent } from './cadastro-tutor/cadastro-tutor.component';
import { MaterialModule } from 'material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroTutorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CadastroTutorComponent
  ],
  providers:[]
})
export class CadastrosModule { }
