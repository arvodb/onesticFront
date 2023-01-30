import { Component, EventEmitter, Output } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { Detail, List } from 'src/app/interface/list';
import { ListPokemonInterface } from 'src/app/interface/listPokemonInterface';


import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private urlPage: ActivatedRoute,public servicio: DataService) { }

  public pag: { offset: number, limit: number, current: number, total: number } = {
    offset: 0, //max value = 1260
    limit: 8,
    current: 1, //max value = 63
    total: 0
  }
  public pokemonList : ListPokemonInterface[] = []
  public pokemonListRequest :  Detail[] = [];
  public pokemonName: string = '';
  public pokemonUrl: string = '';
  public localStorage : {pagination : number, fav: string[], dark:boolean} = {
    pagination:1,
    fav:[],
    dark:false
  }

  public dark : boolean = false;
  @Output() darkEmision = new EventEmitter<boolean>();


  public listPokemon():void
  {
    this.servicio.getPagination(this.pag.offset, this.pag.limit).subscribe((response) => {
      this.pokemonListRequest = response.results;
      this.pag.total = Math.floor(response.count / this.pag.limit);
      this.pokemonList = [];
      this.pokemonListRequest.map((v) => {
      this.servicio.getInfoOnePokemon(v.url).subscribe((response) => {

            this.pokemonList.push({
              id: response.id,
              name: response.name,
              type: response.types,
              sprite : (response.id < 151)
                              ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/'+response.id+'.png'
                              : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+response.id+'.png'
        });
      });
    });
  });
}

  public cntrlPages(isNext: boolean) :void
  {
    if (isNext) {
      this.pag.current++;
      (this.pag.current < this.pag.total) ? this.pag.offset += this.pag.limit : this.pag.current = this.pag.total;
    } else if (!isNext) {
      this.pag.current--;
      (this.pag.current >= 1) ? this.pag.offset -= this.pag.limit : this.pag.current = 1
    }
    this.localStorage.pagination = this.pag.current;
    this.saveLocalStorage();
    this.listPokemon();
    console.log(this.pag);
  }

  public darkMode(bool : boolean) :void
  {
    this.dark = bool;
    this.localStorage.dark = bool;
    this.darkEmision.emit(this.dark);
  }

  public saveFavLocalStorage(pokemonName : any) : void
  {
    this.localStorage.fav.push(pokemonName);
    console.log(this.localStorage);
    this.saveLocalStorage();
  }

  public saveLocalStorage():void
  {
    localStorage.setItem('info',JSON.stringify(this.localStorage));
  }

  public getLocalStorage() : number
  {
    const data = localStorage.getItem('data');
    console.log(data);
    return data ?JSON.parse(data)['pagination'] : []
  }

  ngOnInit(): void {
    const pagUrl = this.urlPage.snapshot.paramMap.get('urlPage');
    console.log(pagUrl)
    this.pag.current = (pagUrl) ? parseInt(pagUrl) : 1;
    this.localStorage.pagination = this.getLocalStorage();
    this.localStorage.pagination = this.pag.current;
    this.saveLocalStorage()
    this.listPokemon();


  }
}

