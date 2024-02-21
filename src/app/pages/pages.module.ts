import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './agregar/form.component';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PokedexService } from '../services/pokedex.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule}  from '@angular/material/input'




@NgModule({
  declarations: [DetailComponent, FormComponent, ListarComponent, HomeComponent, EliminarComponent, EditarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule
  ],
  providers: [PokedexService],
})
export class PagesModule { }
