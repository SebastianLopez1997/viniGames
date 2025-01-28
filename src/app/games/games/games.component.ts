import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  rt = inject(RouterLink);

  redict() {
    this.rt.href('/games') || this.rt.href('/home');
  }
}
