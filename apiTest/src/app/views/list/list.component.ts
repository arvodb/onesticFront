import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Detail, List } from 'src/app/interface/list';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public servicio: DataService) { }

  public pokemonList : Detail[] = [];
  public pokemonName : string = '';
  public getPokemonList(){
    this.servicio.getPokemonList().subscribe(response => {
      this.pokemonList = response.results;
    })
  }

  ngOnInit() : void
  {
    this.getPokemonList();
  }
}
