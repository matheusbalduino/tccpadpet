import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './login/create-account/create-account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'createaccount', component: CreateAccountComponent
  },
  { path: 'index',
   loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path:'',
    redirectTo:'',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
