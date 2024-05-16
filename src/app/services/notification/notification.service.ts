import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Post } from '../../models/posts';
import { Reaction } from '../../models/reaction';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public sendNotification(newReaction: any) {
    // let { reaction_id, date, reaction_type } = newReaction;
    console.log(newReaction);
    return this.http.post(`${this.url}/reactions`, newReaction);
  }

  public showNumberReactionsUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/getReactionsUser?id=${userId}`);
  }
}
