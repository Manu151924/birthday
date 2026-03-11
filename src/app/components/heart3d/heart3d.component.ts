import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-heart3d',
  templateUrl: './heart3d.component.html',
  styleUrls: ['./heart3d.component.scss'],
})
export class Heart3dComponent implements OnInit {
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
      canvas: this.el.nativeElement.querySelector('#heartCanvas'),
    });

    renderer.setSize(window.innerWidth, 400);

    const texture = new THREE.TextureLoader().load('assets/images/couple.png');

    const geometry = new THREE.SphereGeometry(1, 32, 32);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
    });

    const heart = new THREE.Mesh(geometry, material);

    scene.add(heart);

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);

      heart.rotation.y += 0.02;

      renderer.render(scene, camera);
    }

    animate();
  }
}
