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
      img: 'portada-juegos/trivia-potter.jpg',
      titulo: 'Harry potter trivia',
      alt: 'Harry potter trivia',
      router: 'juego/harry-potter',
    },
    {
      img: 'portada-juegos/magic_trivia_game.jpg',
      titulo: 'Magic trivia',
      alt: 'Magic the gathering trivia',
      router: 'juego/magic',
    },
  ];
}
