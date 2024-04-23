import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusComponent } from '../../components/status/status.component';
import { User } from '../../models/user';
import { VideoPostComponent } from '../../components/video-post/video-post.component';
import { UsersListComponent } from '../../components/users-list/users-list.component';
import { UserService } from '../../services/user/user.service';
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [RouterLink, StatusComponent, VideoPostComponent, UsersListComponent, FormLoginComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css',
  providers:[UserService]
})
export class InitComponent {
  user: User[] = [];
  onlineFriends: User[] = [];
  sugerenciaFriends: User[] = [];

  @Input() public apiNewsText: string = 'Ubisoft habría retrasado el Assassins creed ambientado en China';
  @Input() public linkApiNewsRouting: string = "";
  @Input() public avalaible_to_play: boolean = false;
  available_to_play: boolean = false;

 

  public addPost(inputTextPost: HTMLInputElement, inputLinkVideoPost: HTMLInputElement) {
    console.log(inputTextPost.value);
    console.log(inputLinkVideoPost.value);
  }

  constructor() {
    // Obtenemos los users desde localStorage
    let usersFromStorage = localStorage.getItem('user');
    this.user = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    console.log(usersFromStorage)
    console.log(this.user)
  









    // Filtramos los amigos en línea y sugeridos de la lista de users
    // this.onlineFriends = this.user.filter(user => user.available_to_play);

    // // Asumimos que el user actual es el primero en la lista
    // let currentUser = this.user[0];

    // this.sugerenciaFriends = this.user.filter(user => {
    //   let genreMatches = user.genres.filter(genre => currentUser.genres.includes(genre)).length >= 1;
    //   let platformMatches = user.platforms.filter(platform => currentUser.platforms.includes(platform)).length >= 1;
    //   return genreMatches && platformMatches;
    // });
  }
}
