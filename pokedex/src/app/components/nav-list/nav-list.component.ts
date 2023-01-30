import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent {
  @Input() pag : { offset: number, limit: number, current: number, total: number } = {offset:0,limit:20,current:1,total:0};
  public totalPags : number[] = [];
  @Output() pagination = new EventEmitter<boolean>();
  @Output() darkEmision= new EventEmitter<boolean>();
  public fav : boolean = false;;

  public listFav() : void
  {
    this.fav = !this.fav;
  }

  public isNext(bool:boolean) : void
  {
    this.pagination.emit(bool);
  }
  public darkMode(bool : boolean) : void
  {
    this.darkEmision.emit(bool);
  }

  ngOnInit(){

  }

}
