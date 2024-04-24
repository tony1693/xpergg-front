import { Injectable } from '@angular/core';
import { Thread } from '../../models/thread';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public addNewThread(newThread: Thread) {
    return this.http.post(`${this.url}/threads`, newThread);
  }
  // public getThreads(): Observable<Thread[]> {
  // return this.http.get<Thread[]>(`${this.url}/threads`);
  // }

  public getThreadsPS(): Observable<Thread[]> {
    let platform = 'PlayStation';
    return this.http.get<Thread[]>(`${this.url}/threads?platform=${platform}`);
  }

  public getThreadsXbox(): Observable<Thread[]> {
    let platform = 'X-Box';
    return this.http.get<Thread[]>(`${this.url}/threads?platform=${platform}`);
  }

  public getOneThread(searchedGame: string): Observable<Thread[]> {
    if (!searchedGame) {
      return this.http.get<Thread[]>(`${this.url}/threads`);
    } else {
      return this.http.get<Thread[]>(`${this.url}/thread`);
    }
  }
}
