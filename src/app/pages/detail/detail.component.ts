import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from 'src/app/models/pokemon.interface';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedPokemon: Data =  {} as Data;
  pokemonImg: string = '';

  constructor(
    public dialogRef: MatDialogRef<DetailComponent>,
    public pokedexService: PokedexService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.suscribePokemon();
  }

  ngOnInit(): void {
  }


  suscribePokemon(){
    this.pokedexService.getDetail(this.data.name).subscribe((res) => {
      this.selectedPokemon = res;
      this.pokemonImg = this.selectedPokemon.sprites.front_default;
    });
  }

  closeModal(){
    this.dialogRef.close();
  }
}
