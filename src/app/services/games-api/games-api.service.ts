import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {
  private url = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(this.url);
  }
}
