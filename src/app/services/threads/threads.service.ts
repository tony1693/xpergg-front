import { Injectable } from '@angular/core';
import { Thread } from '../../models/thread';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThreadsService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public addNewThread(newThread: Thread) {
    return this.http.post(`${this.url}/threads`, newThread);
  }
}
