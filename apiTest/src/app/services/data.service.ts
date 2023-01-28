import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { List } from '../interface/list';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public apiUrlList = 'https://pokeapi.co/api/v2/pokemon/';

  public getPokemonList(): Observable<List>{
    return this.http.get<List>(this.apiUrlList);
  }
  public getPagination(offset : number , limit : number) : Observable<List>{
    const pagination = this.apiUrlList +'?offset='+offset.toString() + '&limit=' + limit.toString();
    return this.http.get<List>(pagination);
  }
  public getInfoOnePokemon(url : string) : Observable<Pokemon>{
    return this.http.get<Pokemon>(url);
  }


}
