import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListPokemonInterface } from 'src/app/interface/listPokemonInterface';
import { Type } from 'src/app/interface/pokemon';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pokemonId : number | null  = 0;
  @Input() pokemonName : string = '';
  @Input() pokemonTypes : Type[] = []
  @Input() pokemonSprite? : string = '';
  @Input() fav? : boolean = false;
  @Output() sendfav = new EventEmitter<number | null>()

  public saveFav() : void
  {
    this.fav = !this.fav;
    this.sendfav.emit(this.pokemonId)
  }
}
