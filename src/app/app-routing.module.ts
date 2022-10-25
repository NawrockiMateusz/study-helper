import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'todo-list', component: TodolistComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotExistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
