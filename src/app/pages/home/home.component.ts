import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ListarComponent } from '../listar/listar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ListarComponent, {
      width: '650px',
      height: '590px'
    });
  }
}
