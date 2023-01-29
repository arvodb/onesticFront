export interface PokedexVersionGroups {
  generation:         Generation;
  id:                 number;
  move_learn_methods: Generation[];
  name:               string;
  order:              number;
  pokedexes:          Generation[];
  regions:            Generation[];
  versions:           Generation[];
}

export interface Generation {
  name: string;
  url:  string;
}
