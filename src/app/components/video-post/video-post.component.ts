import { Component, Input, input } from '@angular/core';
import { User } from '../../models/user';
import { PostService } from '../../services/post/post.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../models/post';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video-post',
  standalone: true,
  imports: [HttpClientModule, YouTubePlayerModule],
  templateUrl: './video-post.component.html',
  styleUrl: './video-post.component.css',
  providers: [PostService],
})
export class VideoPostComponent {
  @Input() public post!: Post;
  @Input() public user!: User;
  // Inicializa el contador de likes
  likesCount: number = 0;
  public posts: Post[] = [];

  constructor(private readonly postService: PostService) {}
  // public getUserFromLocalStorage(): User | null {
  // const userJson = localStorage.getItem('user');
  // return userJson ? JSON.parse(userJson) : null;
  // }

  @Input() public likeOff: string =
    '../../../assets/icon/icono-corazon-off.svg';

  addLike(): void {
    // this.likesCount++;
    if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
      this.likesCount++;
      this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
    } else {
      this.likeOff = '../../../assets/icon/icono-corazon-off.svg';
      this.likesCount--;
    }
  }

  public addComment(inputComment: HTMLInputElement) {
    console.log(inputComment.value);
  }

  obtainIdURL(url: string): string {
    const videoId = url.split('v=')[1];
    return videoId;
  }
}
