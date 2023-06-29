import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './sidenav/sections/todolist/todolist.component';
import { WeatherComponent } from './sidenav/sections/weather/weather.component';
import { NotesComponent } from './sidenav/sections/notes/notes.component';
import { PomodoroTimerComponent } from './sidenav/sections/pomodoro-timer/pomodoro-timer.component';
import { CaseConverterComponent } from './sidenav/sections/case-converter/case-converter.component';
import { PageNotFoundComponent } from './sidenav/sections/page-not-found/page-not-found.component';
import { MainComponent } from './sidenav/sections/main/main.component';

const routes: Routes = [
  { path: 'to-do', component: TodolistComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'pomodoro', component: PomodoroTimerComponent },
  { path: 'case-converter', component: CaseConverterComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
