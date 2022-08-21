import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'material.module';
import { CadastrosModule } from '../cadastros/cadastros.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    CadastrosModule,

    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class IndexModule { }
