import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  public dark : boolean = false;
  public background : string[]= ['inherit','#302828']
  public color : string = '';

  public darkMode() : void
  {
    this.dark = !this.dark
    if(this.dark){
      this.color = this.background[1];
    } else {
      this.color = this.background[0];
    }

  }

}
