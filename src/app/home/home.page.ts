import { Component, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import confetti from 'canvas-confetti';
import { GalaxyComponent } from "../components/galaxy/galaxy.component";
import { HeartExplosionComponent } from "../components/heart-explosion/heart-explosion.component";
import { Heart3dComponent } from "../components/heart3d/heart3d.component";
import { MemorySphereComponent } from "../components/memory-sphere/memory-sphere.component";
import { LoveMapComponent } from "../components/love-map/love-map.component";
import { MemoriesComponent } from "../components/memories/memories.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, GalaxyComponent, HeartExplosionComponent, Heart3dComponent, MemorySphereComponent, LoveMapComponent, MemoriesComponent],
})
export class HomePage {
  showSurprise = signal(false);
  message = signal('');
  loveLetter = signal('');
  countdown = signal('');

  birthday = new Date('2026-03-13');

  fullText = 'Happy Birthday My Love ❤️';

  constructor() {
    this.typeWriter();
    this.startCountdown();
  }

  openSurprise() {
    this.showSurprise.set(true);

    confetti({
      particleCount: 200,
      spread: 120,
    });
  }

  startCountdown() {
    setInterval(() => {
      const now = new Date().getTime();
      const diff = this.birthday.getTime() - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      this.countdown.set(days + ' days until your birthday ❤️');
    }, 1000);
  }

  typeWriter() {
    let i = 0;

    const interval = setInterval(() => {
      this.message.set(this.fullText.substring(0, i));
      i++;

      if (i > this.fullText.length) {
        clearInterval(interval);
      }
    }, 70);
  }

  generateLetter() {
    const letters = [
      'You are the love of my life ❤️',
      'My world became beautiful when I met you 💕',
      'Forever yours 💖',
    ];

    const random = Math.floor(Math.random() * letters.length);

    this.loveLetter.set(letters[random]);
  }
}
