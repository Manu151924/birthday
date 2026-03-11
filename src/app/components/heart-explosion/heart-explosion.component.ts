import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-heart-explosion',
  template: `<canvas id="explosionCanvas"></canvas>`,
  styleUrls: ['./heart-explosion.component.scss'],
})
export class HeartExplosionComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const canvas = this.el.nativeElement.querySelector('#explosionCanvas');

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 400,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    renderer.setSize(window.innerWidth, 400);

    camera.position.z = 5;

    const textureLoader = new THREE.TextureLoader();
    const heartTexture = textureLoader.load('assets/images/heart.jpg');

    const particles: any[] = [];

    function createHeart(x: number, y: number) {
      const material = new THREE.SpriteMaterial({
        map: heartTexture,
        transparent: true,
      });

      const sprite = new THREE.Sprite(material);

      sprite.position.set(x, y, 0);
      sprite.scale.set(0.5, 0.5, 0.5);

      scene.add(sprite);
      particles.push(sprite);
    }

    canvas.addEventListener('click', (event: any) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / 400) * 2 + 1;

      for (let i = 0; i < 80; i++) {
        createHeart(x * 4, y * 2);
      }
    });

    function animate() {
      requestAnimationFrame(animate);

      particles.forEach((p) => {
        p.position.x += (Math.random() - 0.5) * 0.1;
        p.position.y += (Math.random() - 0.5) * 0.1;
        p.position.z += (Math.random() - 0.5) * 0.1;
      });

      renderer.render(scene, camera);
    }

    animate();
  }
}