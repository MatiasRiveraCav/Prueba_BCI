import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data, Pokedex, Pokemon } from '../models/pokemon.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  public somePokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>({} as Pokemon[]);
  public some$ = this.somePokemons.asObservable();

  public allPokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>({} as Pokemon[]);
  public all$ = this.allPokemons.asObservable();


  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient, private router: Router) {

    this.getSomePokemons().subscribe({
      next: (v) => this.somePokemons.next(v.results),
      error: (e) => this.router.navigateByUrl('pokedex/error')
    });
    this.getAllPokemons().subscribe({
      next: (v) => this.allPokemons.next(v.results),
      error: (e) => this.router.navigateByUrl('pokedex/error')
    });

  }

  getSomePokemons(): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.apiUrl}?limit=12&offset=0`);
  }

  getAllPokemons(): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${this.apiUrl}?limit=1500&offset=0`)
  }

  getDetail(name: string): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}${name}`);
  }


}
