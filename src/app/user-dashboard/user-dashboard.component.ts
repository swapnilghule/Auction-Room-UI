import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  displayedColumnsUser: string[] = ['name', 'prizePool', 'teamsRegistered', 'status', 'action'];

  availableAuctions = [
    { id: 1, name: 'IPL Auction 2024', prizePool: 8, teamsRegistered: '3' ,status: "Open"},
    { id: 2, name: 'Champions League Auction', prizePool: 6, teamsRegistered: '4', status: "Open"},
  ];


  ngOnInit(): void {
  }

  registerForAuction() {

  }
}
