import { Component , OnInit} from '@angular/core';
import {EventService} from '../services/event.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
  events: any[]= [];
  event: any;
  participants: any[] =[];
  displayedColumns: string[] = ['name', 'prizePool', 'status', 'start', 'end', 'actions'];
  auctionEvents = [
    { name: 'IPL 2024', prizePool: '₹1000000', status: 'Active', start: '', end: '', actions: 'edit' },
    { name: 'IPL 2025', prizePool: '₹500000', status: 'Pending', start: 'Start', end: 'Edit' },
  ];

  constructor(private eventService :EventService){

  }
  ngOnInit(): void {
    //this.getEvents();
    // this.getParticipants();
  }

  getEvents(){
    this.eventService.getAllAuctionEvents().subscribe(
      (data: any) => {
        this.events = data;
      },
      error => {
        console.error("Error Fetching events:", error);
      }
    )

  }

  deleteEvent(id: number): void {
  this.eventService.deleteAuctionEvent(id).subscribe(()=>{
  this.getEvents();
  });
  }


  startAuction() {

  }

  endAuction() {

  }

  editEvent() {

  }
}
