import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'index',
   loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path:'',
    redirectTo:'index',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
