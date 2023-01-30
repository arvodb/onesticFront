import { Injectable, Version } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { List } from '../interface/list';
import { Pokemon } from '../interface/pokemon';
import { PokedexVersionGroups } from '../interface/pokemonVersionGroup';
import { DetailPokemonInterface } from '../interface/listPokemonInterface';
import { Pokedex } from '../interface/pokemonSpecies';
import { EvolutionChain } from '../interface/evolutionChain'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public apiUrlList = 'https://pokeapi.co/api/v2/pokemon/';
  public apiPokemonSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';
  public apiRegion = 'https://pokeapi.co/api/v2/version-group/'//pokedexes[0].name
  public apiPokedex = 'https://pokeapi.co/api/v2/pokemon-species/';

  public getPokemonList(): Observable<List>{
    return this.http.get<List>(this.apiUrlList);
  }
  public getPagination(offset : number , limit : number) : Observable<List>{
    const pagination = this.apiUrlList +'?offset='+offset.toString() + '&limit=' + limit.toString();
    return this.http.get<List>(pagination);
  }
  public getInfoOnePokemon(url : string = '',id : number | string | null = 0, hasId:boolean = false) : Observable<Pokemon>{
    return (hasId) ? this.http.get<Pokemon>(this.apiUrlList+id) : this.http.get<Pokemon>(url);
  }

  public getRegion(id : number) : Observable<PokedexVersionGroups>{
    return this.http.get<PokedexVersionGroups>(this.apiRegion+id);
  }
  public getPokedex(id : number) : Observable<Pokedex>
  {
    return this.http.get<Pokedex>(this.apiPokedex + id);
  }
  public getEvolution(url: string) : Observable<EvolutionChain>
  {
    return this.http.get<EvolutionChain>(url);
  }
  public getDetailedInfo(id : number) : Observable<any>[]
  {
    return [this.getPokedex(id),this.getRegion(id)]
  }

}
