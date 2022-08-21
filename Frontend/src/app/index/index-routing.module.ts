import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTutorComponent } from '../cadastros/cadastro-tutor/cadastro-tutor.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: '', component: IndexComponent,
    children:[
      { path:'cadastro', component: CadastroTutorComponent }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
