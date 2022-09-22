import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexModule } from './index/index.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './login/create-account/create-account.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'material.module';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './interceptors/interceptor.module';
import { SignedinGuard } from './signedin.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IndexModule,
    MaterialModule,
    HttpClientModule,
    InterceptorModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),

  ],
  providers: [ SignedinGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
