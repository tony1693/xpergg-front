import { Component, Input, input } from '@angular/core';
import { User } from '../../models/user';
import { PostService } from '../../services/post/post.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../models/post';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NotificationService } from '../../services/notification/notification.service';
import { Reaction } from '../../models/reaction';

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
  @Input() public likeOff: string = '../../../assets/icon/icono-corazon-off.svg';
  // Inicializa el contador de likes
  likesCount: number = 0;
  newReaction: Reaction[] = []
  public posts: Post[] = [];

  constructor(private readonly postService: PostService, 
    private readonly notificationService: NotificationService) {}

    addLike(): void {
      const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const userId: number = JSON.parse(localStorage.getItem('user') as string).user_id;
      // const reactionId: number = Date.now();
      // const postId: number = JSON.parse(localStorage.getItem('post') as string).post_id;
        let newReaction: Reaction = {
        reaction_id: 1,
        date: currentDate,
        reaction_type: "like",
        user_id: userId,
        post_id: this.post.post_id
      };
      localStorage.setItem('likes', JSON.stringify(newReaction));
      // localStorage.setItem('posts', JSON.stringify(newReaction.post_id));
  
      this.notificationService.sendNotification(newReaction).subscribe({
        next: (data) => {
          console.log(data);
          // window.location.reload();
          // setTimeout(() => { location.reload(); }, 1);
        },
        error: (error) => { console.log(error); },
      });
  
      if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
        this.likesCount++;
        this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
        this.notificationService.sendNotification(this.newReaction).subscribe({
          next: (data) => {
            console.log(data);
            window.location.reload();
            setTimeout(() => { location.reload(); }, 1);
          },
          error: (error) => { console.log(error); },
        });
        console.log("like")
        console.log(this.newReaction)
      } else {
        this.likeOff = '../../../assets/icon/icono-corazon-off.svg';
        this.likesCount--;
      }
    }

  //   addLike(): void {
  //   const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  //   const userId: number = JSON.parse(localStorage.getItem('user') as string).user_id;
  //   // const reactionId: number = Date.now();
  //   // const postId: number = JSON.parse(localStorage.getItem('post') as string).post_id;
  //     let newReaction: Reaction = {
  //     reaction_id: 1,
  //     date: currentDate,
  //     reaction_type: "like",
  //     user_id: userId,
  //     post_id: this.post.post_id
  //   };
  //   localStorage.setItem('likes', JSON.stringify(newReaction));
  //   // localStorage.setItem('posts', JSON.stringify(newReaction.post_id));

  //   this.notificationService.sendNotification(newReaction).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       window.location.reload();
  //       setTimeout(() => { location.reload(); }, 1);
  //     },
  //     error: (error) => { console.log(error); },
  //   });

  //   if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
  //     this.likesCount++;
  //     this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
  //     this.notificationService.sendNotification(this.newReaction).subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         window.location.reload();
  //         setTimeout(() => { location.reload(); }, 1);
  //       },
  //       error: (error) => { console.log(error); },
  //     });
  //     console.log("like")
  //     console.log(this.newReaction)
  //   } else {
  //     this.likeOff = '../../../assets/icon/icono-corazon-off.svg';
  //     this.likesCount--;
  //   }
  // }

  // addLike() {
  //   const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  //   const userId: number = JSON.parse(localStorage.getItem('user') as string).user_id;
  //   const postId: number = JSON.parse(localStorage.getItem('post') as string).post_id;

  //   let newReaction: Reaction = {
  //     reaction_id: 0,
  //     date: currentDate,
  //     reaction_type: "like",
  //     user_id: userId,
  //     post_id: postId
  //   };
  //   localStorage.setItem('likes', JSON.stringify(newReaction));
  //   localStorage.setItem('posts', JSON.stringify(newReaction.post_id));

  //   this.notificationService.sendNotification(newReaction).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       window.location.reload();
  //       setTimeout(() => { location.reload(); }, 1);
  //     },
  //     error: (error) => { console.log(error); },
  //   });
  //   if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
  //     this.likesCount++;
  //     this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
  //     this.notificationService.sendNotification(this.newReaction).subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         window.location.reload();
  //         setTimeout(() => { location.reload(); }, 1);
  //       },
  //       error: (error) => { console.log(error); },
  //     });
  //     console.log("like")
  //     console.log(this.newReaction)
  //   } else {
  //     this.likeOff = '../../../assets/icon/icono-corazon-off.svg';
  //     this.likesCount--;
  //   }
  // }

  public addComment(inputComment: HTMLInputElement) {
    console.log(inputComment.value);
  }

  obtainIdURL(url: string): string {
    const videoId = url.split('v=')[1];
    return videoId;
  }
}
