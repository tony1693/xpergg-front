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

  // getThreadById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.url}api/threads/${id}`);
  // }

  // getMessagesById(chat_id: number): Observable<ChatMessage[]> {
  //   return this.http.get<ChatMessage[]>(
  //     `${this.url}api/chat/${chat_id}/messages`
  //   );
  // }

  postMessage(message: ChatMessage): Observable<any> {
    return this.http.post(`${this.url}/threads_messages/:id`, message);
  }

  getAllMessages(thread_id: number): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(
      `${this.url}/threads-messages-users/${thread_id}`
    );
  }

  // postMessage(message: ChatMessage): Observable<any> {
  //   return this.http.post(
  //     `${this.url}api/chat/${message.chat_message_id}/messages`,
  //     message
  //   );
  // }
  // getUsersInChat(chatId: number): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.url}/chats/${chatId}/users`);

  // }
  // getMessageChatUserId(chatId: number): Observable<number> {
  //   return this.http.get<number>(`${this.url}chat_messages/${chatId}/user_id`);
  // }
}
