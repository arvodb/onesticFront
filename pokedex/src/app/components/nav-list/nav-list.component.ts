import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleStrategy } from '@angular/router';


@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {
  constructor() {}
  @Input() pag : { offset: number, limit: number, current: number, total: number } = {offset:0,limit:20,current:1,total:0};
  public totalPags : number[] = [];
  @Input() view : boolean = false;
  @Output() pagination = new EventEmitter<boolean>();
  @Output() listFavourites = new EventEmitter<boolean>();
  @Output() sendview = new EventEmitter<boolean>();
  @Output() darkEmision = new EventEmitter<boolean>();
  public fav : boolean = false;
  @Input() dark : boolean = false;

  public switchViews() : void
  {
    this.view = !this.view;
    this.sendview.emit();
  }
  public listFav() : void
  {
    this.fav = !this.fav;
    this.listFavourites.emit(this.fav)
  }

  public isNext(bool:boolean) : void
  {
    if(!this.fav){
      this.pagination.emit(bool);
    }
  }
  public darkMode(bool : boolean = false) : void
  {

    const root = document.documentElement;

    if(!this.dark && !bool){
      root.style.setProperty('--bg-bright', '#272727');
      root.style.setProperty('--main-txt-bright', '#EDEDED');
      root.style.setProperty(' --bg-components-bright', '#605E5E');
      root.style.setProperty('--bg-components-dark', '#EDEDED');
      root.style.setProperty('--filter','100%')
    }else {
      root.style.setProperty('--bg-bright', '#FEFEFE');
      root.style.setProperty('--main-txt-bright', '#302828');
      root.style.setProperty('--bg-components-bright', '#EDEDED');
      root.style.setProperty('--bg-components-dark', '#605E5E');
      root.style.setProperty('--filter','0%')
    }
    this.darkEmision.emit();
  }

  ngOnInit(){
    const data = localStorage.getItem('info');
    this.dark = data ? JSON.parse(data).dark : false;
    this.fav = data ? JSON.parse(data).listFav : false;
    this.view = data ? JSON.parse(data).view : false;
  }

}
