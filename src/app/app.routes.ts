import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ClickerHeroeComponent } from './games/my-games/clicker-heroe/clicker-heroe.component';
import { HarryPotterComponent } from './games/my-games/harry-potter/harry-potter.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'juego/clicker', component: ClickerHeroeComponent },
  { path: 'juego/harry-potter', component: HarryPotterComponent },
  { path: '**', redirectTo: '' },
];
