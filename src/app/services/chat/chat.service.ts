import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../../models/chatMessage';
import { Thread } from '../../models/thread';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getThreadById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/api/threads/${id}`);
  }

  postMessage(message: ChatMessage): Observable<any> {
    return this.http.post(`${this.url}/threads_messages/:id`, message);
  }

  getAllMessages(thread_id: number): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(
      `${this.url}/threads-messages-users/${thread_id}`
    );
  }
}
