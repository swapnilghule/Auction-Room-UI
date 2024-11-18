import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {AuctionRoomComponent} from './auction-room/auction-room.component';
import {AuctionSummaryComponent} from './auction-summary/auction-summary.component';
import {PlayerSliderComponent} from './player-slider/player-slider.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 {path: 'admin-dashboard', component:AdminDashboardComponent},
 {path: '', redirectTo: '/admin-dashboard', pathMatch: 'full'},
  {path: 'user-dashboard', component:UserDashboardComponent},
  {path: 'user-dashboard/auction-room', component:AuctionRoomComponent},
  {path: 'user-dashboard/auction-summary', component:AuctionSummaryComponent},
  {path: 'player-slider', component:PlayerSliderComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
