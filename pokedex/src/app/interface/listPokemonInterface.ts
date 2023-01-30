import { Type} from "./pokemon"

export interface ListPokemonInterface {
  id:                     number ,
  name:                   string,
  type:                   Type[]
  sprite? :               string,
  fav? :                  boolean
}
export interface DetailPokemonInterface {

  id:                     number,
  genera?:                 string,
  flavourText?:            string,
  habitat?:                string,
  region?:                string,
  height?:                 number,
  weight?:                 number,
  evolution?:              any
}
