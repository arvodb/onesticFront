import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  public dark : boolean = false;
  @Output() darkEmision = new EventEmitter<boolean>();
  public darkMode(bool : boolean) : void
  {
    this.dark = bool
    this.darkEmision.emit(this.dark);
  }

}
