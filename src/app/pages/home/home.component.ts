import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ListarComponent } from '../listar/listar.component';
import { FormComponent } from '../agregar/form.component';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openListar(): void {
    this.dialog.open(ListarComponent, {
      width: '650px',
      height: '590px'
    });
  }

  openCrear(): void {
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '590px'
    });
  }

  openEliminar(){
    this.dialog.open(EliminarComponent, {
      width: '650px',
      height: '590px',
    });
  }

  openEditar(){
    this.dialog.open(EditarComponent, {
      width: '650px',
      height: '590px',
    });
  }
}
