import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginBody, RegisterBody, User } from '../../models/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  public login(loginBody:LoginBody): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginBody);
  }


  public register( registerBody:RegisterBody ): Observable<any> {
    return this.http.post<User>(`${this.apiUrl}/register`, registerBody)
  }

  
}
