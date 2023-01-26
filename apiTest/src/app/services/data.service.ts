import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { List } from '../interface/list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public apiUrlList = 'https://pokeapi.co/api/v2/pokemon/';

  public getPokemonList(): Observable<List>{
    return this.http.get<List>(this.apiUrlList);
  }


}
