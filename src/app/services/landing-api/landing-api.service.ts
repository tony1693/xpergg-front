import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingApiService {

  private url2 = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  getGamesLanding() {
    return this.http.get(this.url2);
  }
}
