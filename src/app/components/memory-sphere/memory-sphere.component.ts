import { Component,ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-memory-sphere',
  templateUrl: './memory-sphere.component.html',
  styleUrls: ['./memory-sphere.component.scss'],
})
export class MemorySphereComponent  implements AfterViewInit {

constructor(private el:ElementRef){}

ngAfterViewInit(){

const canvas=this.el.nativeElement.querySelector('#sphereCanvas');

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer=new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth,400);

const texture=new THREE.TextureLoader()
.load('assets/sphere/mem1.jpg');

const geometry=new THREE.SphereGeometry(3,64,64);

const material=new THREE.MeshBasicMaterial({
map:texture,
side:THREE.BackSide
});

const sphere=new THREE.Mesh(geometry,material);

scene.add(sphere);

camera.position.z=0.1;

function animate(){

requestAnimationFrame(animate);

sphere.rotation.y+=0.0005;

renderer.render(scene,camera);

}

animate();

}
}