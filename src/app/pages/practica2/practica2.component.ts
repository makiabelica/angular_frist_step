import { Component } from '@angular/core';

@Component({
  selector: 'app-practica2',
  templateUrl: './practica2.component.html',
  styleUrls: ['./practica2.component.css']
})
export class Practica2Component {
  tituloAEnviar = 'Titulo enviado desde el padre al hijo';
  mensajeARecivir: string = ''

  receiveDataFromChild(mensaje: string) {
    this.mensajeARecivir = mensaje;
  }
}
