import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { Room, RoomList } from './rooms';

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

  room: Room = {
    totalRooms: 15,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [
    {
      roomNumber: 5,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner,water',
      price: 4000,
      photos: 'https://images.unplash.com/photo',
      chickInTimeLDate: new Date('11-nov-2023'),
      checkoutTime: new Date('21-nov-2023'),
      rating: 2.5,
    },
    {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner,water',
      price: 5000,
      photos: 'https://images.unplash.com/photo',
      chickInTimeLDate: new Date('1-nov-2023'),
      checkoutTime: new Date('5-nov-2023'),
      rating: 2.5,
    },
    {
      roomNumber: 8,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner,water',
      price: 4500,
      photos: 'https://images.unplash.com/photo',
      chickInTimeLDate: new Date('7-nov-2023'),
      checkoutTime: new Date('29-nov-2023'),
      rating: 3.4,
    },
  ];
  ngOnInit(): void {}
  //functions
  toggle() {
    this.showRooms = !this.showRooms;
  }
}
