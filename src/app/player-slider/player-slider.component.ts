import { Component } from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-player-slider',
  templateUrl: './player-slider.component.html',
  styleUrl: './player-slider.component.css',
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
export class PlayerSliderComponent {

  displayedColumnsAuction: string[] = ['bidAmount', 'action'];
  auctionRoomData = [
    {  image: 'assets/rohisharma.jpg', playerName: 'Rohit Sharma', category: 'Opening Batter', basePrice: '500000', bidAmount: '', action: 'placeBid'},
    {  image: 'assets/sky.jpg', playerName: 'Surya Kumar Yadav ', category: 'Middle order Batter', basePrice: '400000', bidAmount: '', action: 'placeBid' },
    {  image: 'assets/hardikpandya.jpg', playerName: 'Hardik Pandya', category: 'All Rounder', basePrice: '500000', bidAmount: '', action: 'placeBid'},
    {  image: 'assets/tilakverma.jpg', playerName: 'Tilak verma ', category: 'Middle order Batter', basePrice: '400000', bidAmount: '', action: 'placeBid' },
    {  image: 'assets/jaspritbumrah.jpg', playerName: 'Jasprit Bumrah', category: 'Fast Bowler', basePrice: '500000', bidAmount: '', action: 'placeBid'},
  ];
  auctionSummary = [
    { team: 'Team A', playersWon: 'Player X (₹500000), Player Y (₹700000)' },
    { team: 'Team B', playersWon: 'Player M (₹300000), Player N (₹600000)' },
  ];

  displayedColumnsSummary: string[] = ['team', 'playersWon'];
  boughtPlayers = [
    {name: "Rohit Sharma", bidAmount: "2000"},
    {name: "SKY", bidAmount: "2000"},
  ]

  currentPlayerIndex = 0;
  player: any;
  purseAmount: any;

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
