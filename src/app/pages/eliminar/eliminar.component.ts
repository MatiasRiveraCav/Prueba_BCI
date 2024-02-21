import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>(this.pokemons);
  selectedPokemon: Pokemon = {} as Pokemon;

  constructor(public dialogRef: MatDialogRef<EliminarComponent>,
    public pokedexService: PokedexService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.suscribePokemons();
  }

  suscribePokemons() {
    this.pokedexService.some$
      .subscribe((res) => {
        this.pokemons = res;
        this.dataSource.data = this.pokemons;
      });
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.openSnackBar();
  }

  openSnackBar() {
    this.eliminarPokemon();
    this._snackBar.open('Pokémon Liberado!', 'Ok');
  }

  eliminarPokemon() {
    const index = this.pokemons.findIndex(p => p.name === this.selectedPokemon.name);
    if (index !== -1) {
      this.pokemons.splice(index, 1);
      this.dataSource.data = [...this.pokemons];
      this.selectedPokemon = {} as Pokemon;
      this.pokedexService.somePokemons.next([...this.pokemons]);

    }
  }


}
