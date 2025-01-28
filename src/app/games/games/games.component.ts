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
  
}
