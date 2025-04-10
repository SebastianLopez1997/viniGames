import {
  Component,
  inject,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clicker-heroe',
  standalone: true,
  imports: [],
  templateUrl: './clicker-heroe.component.html',
  styleUrl: './clicker-heroe.component.css',
})
export class ClickerHeroeComponent {
  rt = inject(Router);

  counter = 0;
  record = 0;
  interval: any;
  moveInterval: any;
  moveSpeed = 1;

  @ViewChild('movingButton', { static: false }) movingButton!: ElementRef;

  incrementCounter() {
    this.counter++;

    if (this.counter >= 10) {
      this.moveButton();
      this.moveSpeed = 200000;
    }

    if (this.counter > 20) {
      this.moveSpeed = 50;
    }

    if (this.counter >= 100 && !this.moveInterval) {
      this.moveSpeed = 200000;
      this.startConstantMovement(); // Iniciar movimiento constante
    }

    if (this.counter > 120) {
      this.moveSpeed = 250;
    }

    if (this.counter > 170) {
      this.moveSpeed = 300;
    }

    if (this.counter > 250) {
      this.moveSpeed = 500;
    }

    this.resetInactivityTimer();
  }

  startConstantMovement() {
    this.moveInterval = setInterval(() => {
      this.moveButton();
    }, this.moveSpeed);
  }

  stopConstantMovement() {
    if (this.moveInterval) {
      clearInterval(this.moveInterval);
      this.moveInterval = null;
    }
  }

  moveButton() {
    if (!this.movingButton) return;

    const container = document.getElementById('button-container');
    if (!container) return;

    const maxTop = container.clientHeight - 30;
    const maxLeft = container.clientWidth - 700;

    const randomTop = Math.random() * maxTop;
    const randomLeft = Math.random() * maxLeft;

    const buttonStyle = this.movingButton.nativeElement.style;
    buttonStyle.position = 'absolute';
    buttonStyle.top = `${randomTop}px`;
    buttonStyle.left = `${randomLeft}px`;
  }

  resetCounter() {
    if (this.counter > this.record) {
      this.record = this.counter;
    }
    this.counter = 0;
    this.moveSpeed = 1;
    this.stopConstantMovement();
  }

  resetInactivityTimer() {
    if (this.interval) {
      clearTimeout(this.interval);
    }

    this.interval = setTimeout(() => {
      this.resetCounter();
    }, 10000);
  }
}
