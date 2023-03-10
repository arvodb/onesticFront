import { Component, EventEmitter, Output } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { Detail } from 'src/app/interface/list';
import { ListPokemonInterface } from 'src/app/interface/listPokemonInterface';


import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private urlPage: ActivatedRoute, public servicio: DataService) { }
  public views: boolean = false //list
  public pag: { offset: number, limit: number, current: number, total: number } = {
    offset: 0, //max value = 1260
    limit: 8,
    current: 1, //max value = 63
    total: 0
  }
  public dark : boolean = false;
  public pokemonList: ListPokemonInterface[] = []
  public pokemonListRequest: Detail[] = [];
  public pokemonName: string = '';
  public pokemonUrl: string = '';
  public localStorage: { pagination: number, fav: number[], dark: boolean, listFav: boolean, urlImg: string, view: boolean } = {
    pagination: 1,
    fav: [],
    dark: false,
    listFav: false,
    urlImg: '',
    view: false
  }

  public cntrlPages(isNext: boolean): void {
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
  }

  //Saved data on LocalStorage

  public saveLocalStorage(): void {
    localStorage.setItem('info', JSON.stringify(this.localStorage));
  }

  public getLocalStorage(): { pagination: number, fav: number[], dark: boolean, listFav: boolean, urlImg: string, view: boolean } {
    const data = localStorage.getItem('info');
    return data ? JSON.parse(data) : this.localStorage;
  }

  public darkMode(): void {
    this.localStorage.dark = !this.localStorage.dark
    this.dark = this.localStorage.dark
    this.saveLocalStorage();
  }

  public updateThisLocal(): void {
    this.localStorage = this.getLocalStorage();
  }

  public listFavourites(bool: boolean): void {
    this.localStorage.listFav = !this.getLocalStorage().listFav;
    this.saveLocalStorage();
    this.listPokemon(bool);
  }

  public switchView(): void {
    this.views = !this.views;
    this.localStorage.view = this.views;
    this.saveLocalStorage();
  }
  //Api request
  public listPokemon(isFav: boolean = false): void {
    const data = localStorage.getItem('info');
    let favLocal = data ? JSON.parse(data).fav : this.localStorage;

    if (isFav) {
      let maxValue: number = (favLocal.length > 0) ? favLocal.reduce((a: number, b: number) => Math.max(a, b)) : 0;
      this.servicio.getPagination(0, maxValue).subscribe((response) => {
        this.pokemonListRequest = response.results;
        this.pag.total = Math.floor(response.count / this.pag.limit);
        this.pokemonList = [];
        this.pokemonListRequest.map((v) => {
          this.servicio.getInfoOnePokemon(v.url).subscribe((response) => {
            if (favLocal.some((v: number) => v == response.id)) {
              this.pokemonList.push({
                id: response.id,
                name: response.name,
                type: response.types,
                sprite: (response.id < 151)
                  ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/' + response.id + '.png'
                  : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + response.id + '.png',
                fav: true
              });
            }
          });
        });
      });
    } else {
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
              sprite: (response.id < 151)
                ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/' + response.id + '.png'
                : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + response.id + '.png',
              fav: (favLocal.filter((v: number) => v == response.id).length > 0) ? true : false
            });
          });
        });
      });
    }

  }


  ngOnInit(): void {

    this.localStorage = this.getLocalStorage();
    this.views = this.localStorage.view;
    this.dark = this.localStorage.dark;
    this.pag.current = (this.localStorage.pagination) ? this.localStorage.pagination : this.getLocalStorage().pagination;
    this.pag.offset = (this.pag.current - 1) * this.pag.limit;
    this.saveLocalStorage();
    (this.localStorage.listFav) ? this.listPokemon(true) : this.listPokemon();
  }

}

