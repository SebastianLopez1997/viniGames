import { Component, inject, OnInit } from '@angular/core';
import { HarryServicesService } from '../../services/harry-potter/harry-services.service';
import { timeout } from 'rxjs';
import { HarryI } from '../interfaces/harry-i';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css',
})
export class HarryPotterComponent implements OnInit {
  characters: { name: string; image: string; species: string }[] = [];
  record: number = 0;
  adivinadas: number = 0;
  characterGame: HarryI = { name: '', image: '', species: '' };
  opciones: string[] = [];
  gameOn: boolean = false;
  nombre2: string | null = null;
  nombre3: string | null = null;

  ngOnInit(): void {
    this.obtenerCharacters();
  }

  private fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    respuesta: ['', [Validators.minLength(3)]],
  });

  obtenerCharacters() {
    let item: number = 1;
    while (item < 5) {
      console.log(`Ejecucion ${item}`);
      //let parametro:string = item.toString;

      this.personajesService.getCharacters(`${item}`).subscribe({
        next: (characters) => {
          this.characters.push(...characters);
          console.log(this.characters);
        },
        error: (e: Error) => {
          console.log(e.message);
        },
      });
      console.log(`Ejecucion ${item}`);
      item++;
    }
  }

  personajesService = inject(HarryServicesService);

  //Funcion para obtener un numero random - pasar por parametro el lenght del array

  getRandomNumber(tamano: number): number {
    return Math.floor(Math.random() * tamano);
  }

  //Funcion para obtener 1 personaje del array

  obtenerPJ() {
    this.characterGame =
      this.characters[this.getRandomNumber(this.characters.length)];
    if (this.characterGame.image == null) {
      while (this.characterGame.image == null) {
        this.characterGame =
          this.characters[this.getRandomNumber(this.characters.length)];
      }
    }
  }

  obtenerOpciones() {
    this.opciones.push(this.characterGame.name);
    this.opciones.push(
      this.characters[this.getRandomNumber(this.characters.length)].name
    );
    this.opciones.push(
      this.characters[this.getRandomNumber(this.characters.length)].name
    );
  }

  start() {
    this.obtenerPJ();
    this.obtenerOpciones();
    this.gameOn = true;
  }

  empezarJuego() {
    console.log(this.characterGame);
    const rta = this.formulario.getRawValue().respuesta;
    Swal.fire(rta);
    Swal.fire(this.characterGame.name);
    if (
      rta.toLocaleLowerCase() === this.characterGame.name.toLocaleLowerCase()
    ) {
      this.adivinadas++;
      Swal.fire('Excelente! sumaste 1 punto');
    } else {
      if (this.adivinadas > this.record) {
        this.record = this.adivinadas;
      }
      Swal.fire({
        icon: 'error',
        title: `No adivinaste`,
        text: 'Mejor suerte la proxima',
      });
    }
    this.obtenerPJ();
  }
}
