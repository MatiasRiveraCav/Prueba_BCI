import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'error',
    loadChildren: () => import('../shared/shared.module').then(m => m.SharedModule)
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class PagesRoutingModule { }
