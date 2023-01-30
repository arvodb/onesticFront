import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListPokemonInterface } from 'src/app/interface/listPokemonInterface';
import { Type } from 'src/app/interface/pokemon';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() view : boolean = false;
  @Input() pokemonId : number | null  = 0;
  @Input() pokemonName : string = '';
  @Input() pokemonTypes : Type[] = []
  @Input() pokemonSprite? : string = '';
  @Input() fav? : boolean = false;
  @Output() sendFavourite = new EventEmitter<boolean>()

  public saveFav(id : number | null )
  {
    this.fav = !this.fav;
    const data = localStorage.getItem('info');
    let local =  data ? JSON.parse(data) : '';
    if(this.fav){
      local.fav.push(id)
      localStorage.setItem('info',JSON.stringify(local));
    } else {
      local.fav = local.fav.filter( (v: number | null) => v!==id );
      localStorage.setItem('info',JSON.stringify(local));
    }
    this.sendFavourite.emit();
  }
  public savePokemon() : void
  {
    const data = localStorage.getItem('info');
    let local =  data ? JSON.parse(data) : '';
    local.urlImg = this.pokemonSprite;
    localStorage.setItem('info',JSON.stringify(local));
  }
}
