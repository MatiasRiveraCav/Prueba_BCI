import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';
import { FormComponent } from '../agregar/form.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>(this.pokemons);
  selectedPokemon: Pokemon =  {} as Pokemon;
  nuevoApodo: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditarComponent>,
    public pokedexService: PokedexService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.suscribePokemons();
  }

  suscribePokemons() {
    this.pokedexService.some$.subscribe((res) => {
      this.pokemons = res;
      this.dataSource.data = this.pokemons;
    });
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.nuevoApodo = pokemon.apodo || '';
  }

  openSnackBar() {
    this._snackBar.open('Apodo Agregado!', 'Ok', {
      duration: 2000
    });
  }

  editarApodo() {
    if (this.selectedPokemon && this.nuevoApodo.trim() !== '') {
      this.selectedPokemon.apodo = this.nuevoApodo.trim();
      this.dataSource.data = [...this.pokemons]
      this.pokedexService.somePokemons.next([...this.pokemons]);
      this.openSnackBar();
      this.selectedPokemon = {} as Pokemon;
      this.nuevoApodo = '';
    }

  }

  closeModal(){
    this.dialogRef.close();
  }
}
