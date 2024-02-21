import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';
import { DetailComponent } from '../detail/detail.component';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  displayedColumns: string[] = [ 'name'];
  dataSource: MatTableDataSource<Pokemon> = new MatTableDataSource<Pokemon>(this.pokemons);
  selectedPokemon: Pokemon =  {} as Pokemon;



  constructor(public dialogRef: MatDialogRef<ListarComponent>,
    public pokedexService: PokedexService,
    public dialog: MatDialog) {

     }

  ngOnInit(): void {
    this.suscribePokemons();
  }

  suscribePokemons() {
    this.pokedexService.some$
      .subscribe((res) => {
        this.pokemons = res;
        this.dataSource.data = this.pokemons;
      })
  }

  openDetail(){
    this.dialog.open(DetailComponent, {
      width: '550px',
      height: '550px',
      data: { name: this.selectedPokemon.name}

    });
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.openDetail();
  }
}
