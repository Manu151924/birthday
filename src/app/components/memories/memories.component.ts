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
    'assets/images/meet.png',
    'assets/images/date.png',
    'assets/images/trip.png',
    'assets/images/today.png'
  ]);

}
