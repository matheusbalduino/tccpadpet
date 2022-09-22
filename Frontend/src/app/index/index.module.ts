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
import { CadastroService } from '../Services/cadastro-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '../users/users.module';
import { HomeComponent } from './home/home.component';
import { InterceptorModule } from '../interceptors/interceptor.module';
import { UsersComponent } from '../users/users.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    CadastrosModule,
    UsersModule,
    FontAwesomeModule,
    InterceptorModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [CadastroService],
})
export class IndexModule { }
