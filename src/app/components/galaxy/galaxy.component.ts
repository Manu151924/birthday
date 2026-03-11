import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss'],
})
export class GalaxyComponent implements OnInit {
  ngOnInit() {}

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: this.el.nativeElement.querySelector('#galaxy'),
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const starsGeometry = new THREE.BufferGeometry();

    const starVertices = [];

    for (let i = 0; i < 10000; i++) {
      starVertices.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
      );
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3),
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);

    scene.add(starField);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      starField.rotation.y += 0.0005;

      renderer.render(scene, camera);
    }

    animate();
  }
}
