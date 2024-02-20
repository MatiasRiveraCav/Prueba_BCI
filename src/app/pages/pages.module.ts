import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PokedexService } from '../services/pokedex.service';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [DetailComponent, FormComponent, ListarComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [PokedexService],
})
export class PagesModule { }
