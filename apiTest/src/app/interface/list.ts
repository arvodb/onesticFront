export interface List {
  count:    number;
  next:     string;
  previous: null;
  results:  Detail[];
}

export interface Detail {
  name: string;
  url:  string;
}
