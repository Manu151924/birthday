import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-heart-explosion',
  templateUrl: './heart-explosion.component.html',
  styleUrls: ['./heart-explosion.component.scss'],
})
export class HeartExplosionComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const canvas = this.el.nativeElement.querySelector('#explosionCanvas');

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, 400);

    camera.position.z = 5;

    const particles: any[] = [];

    function createHeart(x: number, y: number) {
      const geometry = new THREE.SphereGeometry(0.1, 16, 16);

      const material = new THREE.MeshBasicMaterial({
        color: 0xff3366,
      });

      const heart = new THREE.Mesh(geometry, material);

      heart.position.set(x, y, 0);

      scene.add(heart);

      particles.push(heart);
    }

    canvas.addEventListener('click', (event: any) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      for (let i = 0; i < 100; i++) {
        createHeart(x * 5, y * 5);
      }
    });

    function animate() {
      requestAnimationFrame(animate);

      particles.forEach((p) => {
        p.position.x += Math.random() - 0.5;
        p.position.y += Math.random() - 0.5;
        p.position.z += Math.random() - 0.5;
      });

      renderer.render(scene, camera);
    }

    animate();
  }
}
