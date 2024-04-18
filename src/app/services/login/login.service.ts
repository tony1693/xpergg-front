import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../app/models/user'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  verifyUser(name: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user?name=${name}&password=${password}`);
  }
}

