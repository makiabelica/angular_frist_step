import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { CientificaComponent } from './pages/cientifica/cientifica.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacturacionComponent } from './pages/facturacion/facturacion.component';
import { CompaComponent } from './pages/compa/compa.component';
import { ProgramacionComponent } from './pages/programacion/programacion.component';
import { HalaMadridComponent } from './pages/hala-madrid/hala-madrid.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CientificaComponent,
    FacturacionComponent,
    CompaComponent,
    ProgramacionComponent,
    HalaMadridComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
