import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { HeaderListComponent } from './components/header-list/header-list.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
      AppComponent,
      ListComponent,
      DetailComponent,
      HeaderListComponent,
      NavListComponent,
      CardComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ]
})
export class AppModule { }
