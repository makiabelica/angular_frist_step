import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleUFG = 'ufg';
  title = 'mi-primer-angular';
  tituloAEnviar = 'Titulo envado desde el padre al hjo'
  mensajeHijo = ''
  titleFacturacion = 'Facturacion-NT';
  // @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  obtenerMensajeHijo(mensaje: string) {
    this.mensajeHijo = mensaje
  }

}
