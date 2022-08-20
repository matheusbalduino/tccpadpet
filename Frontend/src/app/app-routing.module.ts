import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Index',
   loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path:'',
    redirectTo:'Index',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
