import { Component, inject, OnInit } from '@angular/core';
import { HarryServicesService } from '../../services/harry-potter/harry-services.service';
import { timeout } from 'rxjs';
import { HarryI } from '../interfaces/harry-i';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css',
})
export class HarryPotterComponent implements OnInit {
  characters: { name: string; image: string; species: string }[] = [];
  record: number = 0;
  adivinadas: number = 0;
  characterGame: HarryI | undefined;

  ngOnInit(): void {
    this.obtenerCharacters();
  }

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
    this.characterGame = this.characters[this.getRandomNumber(this.characters.length)];
  }
  
  
  
  
}
