import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../../models/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public addComment(newComment: Comment) {
    return this.http.post(`${this.url}/comments`, newComment);
  }

  public showComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments/${postId}`);
  }

  public showNumberCommentsUser(userId: number): Observable<any> {
    console.log(userId);
    return this.http.get<any>(`${this.url}/getCommentsUser?id=${userId}`);
  }

  getAllCommentsByPost(post_id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments/${post_id}`);
  }
}
