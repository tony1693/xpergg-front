import { Component, Input, input } from '@angular/core';
import { User } from '../../models/user';
import { PostService } from '../../services/post/post.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../models/post';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from '../../models/comment';
import { error } from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../../services/notification/notification.service';
import { Reaction } from '../../models/reaction';

@Component({
  selector: 'app-video-post',
  standalone: true,
  imports: [HttpClientModule, YouTubePlayerModule],
  templateUrl: './video-post.component.html',
  styleUrl: './video-post.component.css',
  providers: [PostService, CommentService],
})
export class VideoPostComponent {
  @Input() public post!: Post;
  @Input() public user!: User;
  @Input() public likeOff: string =
    '../../../assets/icon/icono-corazon-off.svg';
  // Inicializa el contador de likes
  likesCount: number = 0;
  newReaction: Reaction[] = [];
  public posts: Post[] = [];
  public postId: number = 0;
  public comments: Comment[] = [];
  public userName: string = '';
  public avatar: string = '';

  // @Input() public likeOff: string =
  // '../../../assets/icon/icono-corazon-off.svg';

  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService,
    private route: ActivatedRoute,
    private readonly notificationService: NotificationService
  ) {
    // Aquí recuperamos el userName:
    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const userName = userData ? userData.name : '';
    localStorage.setItem('name', userName);
    console.log(userName);

    // Aquí recuperamos el avatar:
    const avatarDataString = localStorage.getItem('avatar');
    this.avatar = avatarDataString as string;
    console.log(this.avatar);
  }

  // public getUserFromLocalStorage(): User | null {
  // const userJson = localStorage.getItem('user');
  // return userJson ? JSON.parse(userJson) : null;
  // }

  // addLike(): void {
  //   // this.likesCount++;
  //   if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
  //     this.likesCount++;
  //     this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
  //   } else {
  //     this.likeOff = '../../../assets/icon/icono-corazon-off.svg';
  //     this.likesCount--;
  //   }
  // }

  addLike(): void {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    // const reactionId: number = Date.now();
    // const postId: number = JSON.parse(localStorage.getItem('post') as string).post_id;
    let newReaction: Reaction = {
      reaction_id: 1,
      date: currentDate,
      reaction_type: 'like',
      user_id: userId,
      post_id: this.post.post_id,
    };
    localStorage.setItem('likes', JSON.stringify(newReaction));
    // localStorage.setItem('posts', JSON.stringify(newReaction.post_id));

    this.notificationService.sendNotification(newReaction).subscribe({
      next: (data) => {
        console.log(data);
        // window.location.reload();
        // setTimeout(() => { location.reload(); }, 1);
      },
      error: (error) => {
        console.log(error);
      },
    });

    if (this.likeOff == '../../../assets/icon/icono-corazon-off.svg') {
      this.likesCount++;
      this.likeOff = '../../../assets/icon/icono-corazon-on.svg';
      this.notificationService.sendNotification(this.newReaction).subscribe({
        next: (data) => {
          console.log(data);
          // window.location.reload();
          // setTimeout(() => {
          //   location.reload();
          // }, 1);
        },
        error: (error) => {
          console.log(error);
        },
      });
      console.log('like');
      console.log(this.newReaction);
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
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const userId: number = JSON.parse(
      localStorage.getItem('user') as string
    ).user_id;
    let newComment: Comment = {
      comment_id: 0,
      date: currentDate,
      text: inputComment.value,
      user_id: userId,
      post_id: this.post.post_id,
    };
    this.commentService.addComment(newComment).subscribe({
      next: (data) => {
        console.log(data);
        setTimeout(() => {
          location.reload();
        }, 1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public obtainIdURL(url: string): string {
    const videoId = url.split('v=')[1];
    return videoId;
  }

  public showComments(postId: number) {
    if (postId) {
      this.commentService.showComments(postId).subscribe({
        next: (comments) => {
          this.comments = comments;
          console.log(comments);
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('no existe ese post');
    }
  }
}
