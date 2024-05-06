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
    // Construye el objeto de datos de forma condicional
    const data: any = {};
    if (imgavatar !== undefined) data.imgavatar = imgavatar;
    if (name !== undefined) data.name = name;
    if (email !== undefined) data.email = email;
    if (nationality !== undefined) data.nationality = nationality;
    if (about_me !== undefined) data.about_me = about_me;
    if (password !== undefined) data.password = password;
    if (available_to_play !== undefined)
      data.available_to_play = available_to_play;
    if (platform !== undefined) data.platform = platform;
    if (interest !== undefined) data.interest = interest;

    return this.http.put(`${this.apiUrl}/user/${userId}`, data);
  }

  public modifyPassword(userId: string, password: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/modifyPassword`, { user_id: userId, password });
  }


  

  // Funcion para modificar el Avatar:

  updateAvatar(userId: number, newAvatar: string): Observable<any> {
    const data: any = {
      imgavatar: newAvatar,
      user_id: userId,
    };
    return this.http.put(`${this.apiUrl}/editAvatar`, data);
  }
}
