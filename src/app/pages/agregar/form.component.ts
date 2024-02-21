import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>(this.pokemons);
  selectedPokemon: Pokemon = {} as Pokemon;
  pokemonesAtrapados: Pokemon [] = []


  constructor(public dialogRef: MatDialogRef<FormComponent>,
    public pokedexService: PokedexService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.suscribePokemons();
  }

  suscribePokemons() {
    this.pokedexService.all$
      .subscribe((res) => {
        this.pokemons = res;
        this.dataSource.data = this.pokemons;
      })
    this.pokedexService.some$
      .subscribe((res) => {
      this.pokemonesAtrapados = res;
      })

  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.openSnackBar();
  }

  openSnackBar() {
    if (this.selectedPokemon) {
      this._snackBar.open('Pokémon Añadido!', 'Ok');
      this.agregarAtrapado(this.selectedPokemon);
    }
  }

  agregarAtrapado(pokemon: Pokemon) {
    this.pokedexService.somePokemons.next([...this.pokemonesAtrapados, pokemon]);
  }

}
