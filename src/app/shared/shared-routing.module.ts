import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [

  {
    path: '',
    component: ErrorComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class SharedRoutingModule { }
