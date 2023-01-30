import { Component } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { Detail, List } from 'src/app/interface/list';
import { ListPokemonInterface } from 'src/app/interface/listPokemonInterface';

import { takeUntil } from 'rxjs';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public servicio: DataService) { }
  public pag: { offset: number, limit: number, current: number, total: number } = {
    offset: 0, //max value = 1260
    limit: 20,
    current: 0, //max value = 63
    total: 0
  }
  public pokemonList : ListPokemonInterface[] = []
  public pokemonListRequest :  Detail[] = [];
  public pokemonName: string = '';
  public pokemonUrl: string = '';

  public listPokemon() {
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

  public cntrlPages(isNext: boolean) {
    if (isNext) {
      this.pag.current++;
      (this.pag.current < this.pag.total) ? this.pag.offset += this.pag.limit : this.pag.current = this.pag.total;
    } else if (!isNext) {
      this.pag.current--;
      (this.pag.current > 0) ? this.pag.offset -= this.pag.limit : this.pag.current = 0
    }
    this.listPokemon();
    console.log(this.pag);
  }
  public console() {
    //this.listPokemon()
    console.log(this.pokemonList)
  }

  ngOnInit(): void {
    this.listPokemon();
    console.log(this.pokemonList)

  }
}

/*
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1
*/
