import { Component } from '@angular/core';

@Component({
  selector: 'app-auction-summary',
  templateUrl: './auction-summary.component.html',
  styleUrl: './auction-summary.component.css'
})
export class AuctionSummaryComponent {
  auctionSummary = [
    { team: 'Team A', playersWon: 'Player X (₹500000), Player Y (₹700000)' },
    { team: 'Team B', playersWon: 'Player M (₹300000), Player N (₹600000)' },
  ];

  displayedColumnsSummary: string[] = ['team', 'playersWon'];


}
