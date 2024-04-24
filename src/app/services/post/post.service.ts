import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public addPost(newPost: Post) {
    return this.http.post(`${this.url}/posts`, newPost);
  }
}
