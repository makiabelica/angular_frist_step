import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number = 0
  num2: number = 0
  resultado: number = 0

  pressKey(myVar: any) {
    this.num1 = + myVar.target.value
  }

  pressKey2(myVar: any) {
    this.num2 = + myVar.target.value
  }

  sumameEsta() {
    this.resultado = this.num1 + this.num2
  }

  @Input()
  tituloARecbir: string = ''

  @Output() mensaje = new EventEmitter<string>()

}
