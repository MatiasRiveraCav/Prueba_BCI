import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Pokedex, Pokemon } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  displayedColumns: string[] = [ 'name'];
  dataSource = [...this.pokemons];


  constructor(public dialogRef: MatDialogRef<ListarComponent>,
    public pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.suscribePokemons();
  }

  suscribePokemons() {
    this.pokedexService.data$
      .subscribe((res: Pokedex) => {
        this.pokemons = res.results;
      })
  }
}
