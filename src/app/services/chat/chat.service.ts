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

  // postMessage(message: ChatMessage): Observable<any> {
  //   return this.http.post(this.url + 'chatMessages', message);
  // }
  // getMessagesById(): Observable<ChatMessage[]> {
  //   return this.http.get<ChatMessage[]>(`this.url + chatMessages`);
  // }
  getMessagesById(chat_id: number): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.url}api/chat/${chat_id}/messages`);
  }
  


  postMessage(message: ChatMessage): Observable<any> {
    return this.http.post(`${this.url}api/chat/${message.chat_message_id}/messages`, message);
  }
}


