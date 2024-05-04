import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../models/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  public addPost(newPost: Post) {
    return this.http.post(`${this.url}/posts`, newPost);
  }

  public getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }
  
    getUserPostCount(userId: number): Observable<any> {
      return this.http.get<any>(`${this.url}/getUserPostCount?id=${userId}`);
    }
}

