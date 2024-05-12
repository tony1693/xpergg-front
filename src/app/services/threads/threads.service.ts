import { Injectable } from '@angular/core';
import { Thread } from '../../models/thread';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  getThreadById(chatId: any) {
    throw new Error('Method not implemented.');
  }
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public addNewThread(newThread: Thread) {
    return this.http.post(`${this.url}/threads`, newThread);
  }

  public getThreads(platform: string): Observable<Thread[]> {
    return this.http.get<Thread[]>(`${this.url}/threads?platform=${platform}`);
  }
}
