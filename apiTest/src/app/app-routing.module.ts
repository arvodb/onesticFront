import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'list',pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'detail/:pokemonid', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

