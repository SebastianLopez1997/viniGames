import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  rt = inject(Router);

  juegos = [
    {
      img: 'portada-juegos/clicker-portada.jpg',
      titulo: 'Clicker Heroe',
      alt: 'Juego clicker',
      router: 'juego/clicker',
    },
    
    {
     img: 'portada-juegos/clicker-portada.jpg',
      titulo: 'Harry potter trivial',
      alt: 'Harry potter trivial',
      router: 'juego/harry-potter',
    }
   
  ];
}
