import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = "http://localhost:8081/api"

  constructor(private http: HttpClient) { }

  getAllAuctionEvents(): Observable<any>{
    return this.http.get(`${this.baseUrl}/all`)
  }

  register(user: any): Observable<any>{
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  login(email: string, password: string): Observable<any>{
    const params = new HttpParams().set('email', email).set('password', password)
    return this.http.post<string>(`${this.baseUrl}/users/login-api`, null, {params
    ,
      responseType: 'text' as 'json'});
  }

  registerForEvent(eventId: number): Observable<any>{
     return this.http.post(`${this.baseUrl}/${eventId}/register`, {})
  }

  getEventByUserId(userId: string): Observable<any>{
   return this.http.get(`${this.baseUrl}/${userId}`)
  }

  deleteAuctionEvent(auctionId : number): Observable<any>{
  return this.http.get(`${this.baseUrl}/${auctionId}`)
  }
}
