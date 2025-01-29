import { Component, inject, OnInit } from '@angular/core';
import { HarryServicesService } from '../../services/harry-potter/harry-services.service';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css',
})
export class HarryPotterComponent implements OnInit {
 characters: { name: string; image: string; species: string }[] = [];

  ngOnInit(): void {
 
    this.personajesService.getCharacters().subscribe({
      next: (characters) => {
        this.characters = characters;
        console.log(this.characters);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  

  personajesService = inject(HarryServicesService);
}
