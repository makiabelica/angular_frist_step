import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CientificaComponent } from './pages/cientifica/cientifica.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
//imports de material
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
//componentes
import { CompaComponent } from './component/compa/compa.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { Practica1Component } from './pages/practica1/practica1.component';
import { Practica2Component } from './pages/practica2/practica2.component';
import { Calculadora2Component } from './component/calculadora2/calculadora2.component';
import { HalaMadridComponent } from './component/hala-madrid/hala-madrid.component';
import { ProgramacionComponent } from './component/programacion/programacion.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CientificaComponent,
    FacturacionComponent,
    CompaComponent,
    Practica1Component,
    Practica2Component,
    Calculadora2Component,
    HalaMadridComponent,
    ProgramacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    //importancion de componentes de matiral
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
