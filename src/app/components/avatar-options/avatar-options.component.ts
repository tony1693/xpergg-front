import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-avatar-options',
  standalone: true,
  imports: [AvatarComponent, CommonModule],
  templateUrl: './avatar-options.component.html',
  styleUrl: './avatar-options.component.css',
})
export class AvatarOptionsComponent {
  userModel!: User;
  public selectedAvatar: string = '';
  @Input() public optionsVisible: boolean = false;

  // Funcion para cambiar avatar //

  avatars = [
    {
      avatar_Id: 1,
      selectedAvatar:
        'https://img.freepik.com/foto-gratis/avatar-androgino-persona-queer-no-binaria_23-2151100167.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1708387200&semt=ais',
    },
    {
      avatar_Id: 2,
      selectedAvatar:
        'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/224509597/original/a163771cff5ece84e7697950a22cb181d3242def/your-avatar-of-grand-theft-auto-gta.jpeg',
    },
    {
      avatar_Id: 3,
      selectedAvatar:
        'https://www.svg.com/img/gallery/fall-guys-how-to-unlock-the-wwe-summerslam-skins/intro-1659103239.jpg',
    },
    {
      avatar_Id: 4,
      selectedAvatar:
        'https://m.media-amazon.com/images/M/MV5BODYwOTU4YjUtMDczYS00YWZjLWI5MzMtZmIxYTM0OTc5MGZhXkEyXkFqcGdeQXVyNTk1ODMyNjA@._V1_.jpg',
    },
    {
      avatar_Id: 5,
      selectedAvatar:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f370ee106914163.5ff7b7a6a1881.jpg',
    },
    {
      avatar_Id: 6,
      selectedAvatar:
        'https://i.pinimg.com/736x/bc/4c/59/bc4c59e9d6d9f03153bd9a197a2384ba.jpg',
    },
    {
      avatar_Id: 7,
      selectedAvatar:
        'https://image.api.playstation.com/cdn/UP9000/BCUS98232_00/e7fCF4IrX17nCvzhMc4COrVXRdO4LqBe.png?w=440&thumb=false',
    },
    {
      avatar_Id: 8,
      selectedAvatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4UGt0gMfypDXrwyCDEa5Uy8XsM_1aWdQTI25hzhE8EZ4VpfuIl8SGlnmzTEnjeJUt0c&usqp=CAU',
    },
    {
      avatar_Id: 9,
      selectedAvatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNn4d_lU3UW7qa9LBZXxD9VKVCwTq-2wESi364DCN5g&s',
    },
    {
      avatar_Id: 10,
      selectedAvatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKWw19HAGzpd1RmG7qoB4Ca4LBWlEPLbJnRDGZ881ag&s',
    },
    {
      avatar_Id: 11,
      selectedAvatar:
        'https://image.api.playstation.com/cdn/EP0700/CUSA06014_00/nkevK3UfpDkOtvYjQCoPUPKZ4DsKza7r.png?w=440&thumb=false',
    },
    {
      avatar_Id: 12,
      selectedAvatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5hpDW1EfGrruoced3KdbfzQa_m7sXwsII13S8e3olg&s',
    },
    {
      avatar_Id: 13,
      selectedAvatar:
        'https://i.pinimg.com/474x/4d/86/5e/4d865ea47a8675d682ff35ad904a0af6.jpg',
    },
    {
      avatar_Id: 14,
      selectedAvatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4RFdWRxhzdtS3LJy7xSI8LGUhzG1RjT1UT452xq9iQ&s',
    },
  ];

  constructor(private userService: UserService) {}

  toggleOptions() {
    this.optionsVisible = true;
  }

  closeOptions() {
    this.optionsVisible = false;
  }

  selectAvatar(newAvatar: string) {
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    this.userService.updateAvatar(userId, newAvatar).subscribe({
      next: () => {
        console.log('Avatar modificado correctamente');
        this.selectedAvatar = newAvatar;
        localStorage.setItem('avatar', newAvatar);
        location.reload();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateAvatarDataBase(newAvatar: string) {
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    this.userService.updateAvatar(userId, newAvatar).subscribe({
      next: () => {
        console.log('Actualizado correctamente en BD');
      },
      error: (error) => {
        console.log('Error al actualizar la base de datos');
      },
    });
  }
  // modifyAvatar(avatar: any) {
  //   this.selectedAvatar = avatar.selectedAvatar;
  //   setTimeout(() => {
  //     location.reload();
  //   }, 1);
  // }
}
