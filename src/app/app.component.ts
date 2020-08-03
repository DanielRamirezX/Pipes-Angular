import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitan America';
  nombre2 = 'dAniEl RamIreZ';

  arreglo = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ];
  pi: number = Math.PI;
  porcentaje = 0.234;
  salario = 12345;
  fecha = new Date();
  idioma = 'es';

  videoURL = 'https://www.youtube.com/embed/EUX6lXTX9zQ';

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);

  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    }
  };

}
