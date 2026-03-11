import { Component, OnInit,signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.scss'],
  imports: [CommonModule]
})
export class MemoriesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

   images = signal([
    'assets/images/meet.jpg',
    'assets/images/date.jpg',
    'assets/images/trip.jpg',
    'assets/images/today.jpg'
  ]);

}
