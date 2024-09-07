import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practica1Component } from './pages/practica1/practica1.component';
import { Practica2Component } from './pages/practica2/practica2.component';
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: 'pages/practica1', component: Practica1Component },
  { path: 'pages/practica2', component: Practica2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
