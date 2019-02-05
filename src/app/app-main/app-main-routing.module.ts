import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: '', component: ListComponent, data: { title: 'Home' } },
  { path: 'favorite', component: FavoriteComponent, data: { title: 'Favorite' } },
  { path: 'advanced', component: ListComponent, data: { title: 'Advanced' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppMainRoutingModule { }
