import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../../models/chatMessage';
import { Thread } from '../../models/thread';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  
  getThreadById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}api/threads/${id}`);
  }

  postMessage(message: ChatMessage): Observable<any> {
    return this.http.post(this.url + 'chatMessages', message);
  }
  getMessages(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.url + 'chatMessages');
  }
}

