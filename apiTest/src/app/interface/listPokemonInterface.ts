import { Pokemon,Type,Sprites,OfficialArtwork } from "./pokemon"
export interface ListPokemonInterface {
  id:       number,
  name:     string,
  type:     Type[]
  sprite? : string;
}
