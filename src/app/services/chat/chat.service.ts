import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../../models/chatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postMessage(message: ChatMessage): Observable<any> {
    return this.http.post(this.url, message);
  }
  getMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.url);
  }
}
