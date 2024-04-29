import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginBody, RegisterBody, User, userPosts } from '../../models/user';
import { Post } from '../../models/posts';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public login(loginBody: LoginBody): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginBody);
  }

  public register(registerBody: RegisterBody): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/register`, registerBody);
  }

 public updateUserAvailability(
    userId: string,
    isAvailable: boolean
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/available?id=${userId}`, {
      available_to_play: isAvailable,
    });
  }

  public getNameAndAvatar(): { name: string; avatar: string } | null {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      return { name: user.name, avatar: user.imgavatar };
    }
    return null;
  }

  public updateUser(
    userId: string,
    imgavatar: string,
    name: string,
    email: string,
    nationality: string,
    about_me: string,
    password: string,
    available_to_play: boolean,
    platform: string[],
    interest: string[]
  ): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile/${userId}`, {
      imgavatar,
      name,
      email,
      nationality,
      about_me,
      password,
      available_to_play,
      platform,
      interest
    });
  }
  


}
