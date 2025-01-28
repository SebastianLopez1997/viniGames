import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { GamesPageComponent } from '../../games/games-page/games-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeComponent,GamesPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
