import { Component } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-auction-room',
  templateUrl: './auction-room.component.html',
  styleUrl: './auction-room.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class AuctionRoomComponent {
  displayedColumnsAuction: string[] = ['bidAmount', 'action'];
  auctionRoomData = [
    {  image: 'imagexyz', playerName: 'Player A', category: 'All-Rounder', basePrice: '₹500000', bidAmount: '', action: 'placeBid'},
    {  image: 'imageabc', playerName: 'Player B', category: 'Spinner', basePrice: '₹400000', bidAmount: '', action: 'placeBid' },
  ];


  currentPlayerIndex = 0;
  player: any;

  nextPlayer() {
    if (this.currentPlayerIndex < this.auctionRoomData.length - 1) {
      this.currentPlayerIndex++;
    } else {
      this.currentPlayerIndex = 0; // Loop back to the start
    }
  }

  placeBid() {

  }

  passBid() {

  }
}
