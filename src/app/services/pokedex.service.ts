import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokedex, Pokemon } from '../models/pokemon.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  private pokemons: BehaviorSubject<Pokedex> = new BehaviorSubject<Pokedex>({} as Pokedex);
  public data$ = this.pokemons.asObservable();


  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0';

  constructor( private http: HttpClient, private router: Router ) {

    this.getAllPokemons().subscribe({
      next: (v) => this.pokemons.next(v),
      error: (e) => this.router.navigateByUrl('pokedex/error')
  })

  }

  getAllPokemons(): Observable<Pokedex> {
    return this.http.get<Pokedex>(this.apiUrl);
  }




}
