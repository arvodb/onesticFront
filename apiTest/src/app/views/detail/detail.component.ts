import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private pokName: ActivatedRoute){}

  public pokemonName = this.pokName.snapshot.paramMap.get('pokemonName');
  ngOnInit(){
  }
}
