import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora2',
  templateUrl: './calculadora2.component.html',
  styleUrls: ['./calculadora2.component.css']
})
export class Calculadora2Component {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  @Input()
  tituloARecibir: string = '';

  @Output() dataChanged = new EventEmitter<string>();

  constructor() { }

  sumameEsta() {
    this.resultado = this.num1 + this.num2
  }

  notificarAlPadre() {
    const mensaje: string = "Mensaje enviado desde el componente hijo al padre"
    this.dataChanged.emit(mensaje);
  }
}
