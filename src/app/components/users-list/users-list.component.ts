import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [StatusComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  @Input() title: string = '';
  @Input() status: boolean = true;
  @Input() usersList: any[] = [];

  constructor() {}

  public getUserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
  ngOnInit(): void {}
}
