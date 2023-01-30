import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './views/detail/detail.component';
import { ListComponent } from './views/list/list.component';
const routes: Routes = [
  {path: '',redirectTo: 'list/1',pathMatch: 'full'},
  {path: 'list/:urlPage', component: ListComponent},
  {path: 'detail/:pokemonid',component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
  {path: '', redirectTo: 'list',pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'detail/:pokemonid', component: DetailComponent}
*/
