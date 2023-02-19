import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'hive-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  /*data Binding*/
  //interpollation
  hotel = 'Hilton Hotel';
  //property binding
  NumberofRooms = 10;
  //event binding
  showRooms = false;
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.showRooms = !this.showRooms;
  }
}
