import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTutorComponent } from '../cadastros/cadastro-tutor/cadastro-tutor.component';
import { ChatComponent } from '../chat/chat.component';
import { UsersComponent } from '../users/users.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: '', component: IndexComponent,
    children:[
      { path:'cadastro', component: CadastroTutorComponent },
      { path:'users', component: UsersComponent },
      { path:'home', component: HomeComponent },
      { path:'chat', component: ChatComponent },

    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
