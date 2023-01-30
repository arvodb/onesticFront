import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

import { DetailPokemonInterface, ListPokemonInterface } from 'src/app/interface/listPokemonInterface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private pokemonId: ActivatedRoute, public servicio: DataService) { } //recibe por ur.

  public pokemonIdUrl: string | null = ''
  public pokemonBasics: ListPokemonInterface = { id: 0, name: '', type: [], sprite: '', fav: false };
  public pokemonDetail : DetailPokemonInterface = {id: 0}
  public pokemonExtendedInfo(): void {

  }

  public getPokemonBasics() : void {

    this.servicio.getInfoOnePokemon('', this.pokemonBasics.id, true).subscribe((response) => {

      this.pokemonBasics = {
        id: response.id,
        name: response.name,
        type: response.types,
        sprite: (response.id < 151)
          ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/' + response.id + '.png'
          : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + response.id + '.png'
      };
      this.pokemonDetail = {
        id: response.id,
        height: response.height,
        weight: response.weight

      }
      console.log(this.pokemonDetail)
    });
  }
  public getPokemonDetailInfo(id : number) : void {

    this.servicio.getPokedex(id).subscribe((response) => {

      this.pokemonDetail.genera = response.genera.filter(v  => (v.language.name === 'en')).map( v => v.genus).toString();
      this.pokemonDetail.flavourText = response.flavor_text_entries[0].flavor_text;
      this.pokemonDetail.habitat = response.habitat.name;
      console.log(this.pokemonDetail);

      this.servicio.getEvolution(response.evolution_chain.url).subscribe((response) => {
        let allEvolutionsNames = []
        let currentEvolution = response.chain;
        while(currentEvolution){
          allEvolutionsNames.push(currentEvolution.species.name);
          currentEvolution = currentEvolution.evolves_to[0];
        }
        this.pokemonDetail.evolution = allEvolutionsNames;
      })
    });

    this.servicio.getRegion(id).subscribe ((response) => {
      this.pokemonDetail.region = response.regions[0].name;
    })
  }

  ngOnInit(){
    const idUrl = this.pokemonId.snapshot.paramMap.get('pokemonid');
    this.pokemonBasics.id = (idUrl) ? parseInt(idUrl) : 0;
    this.getPokemonBasics();
    this.getPokemonDetailInfo(this.pokemonBasics.id);
    console.log(this.pokemonDetail);

  }
}
