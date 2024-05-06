import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
  providers: [CommentService],
})
export class CommentComponent {
  @Input() public comment!: Comment;
  public postID!: number;
  comments: Comment[] = [];

  constructor(private readonly commentService: CommentService) {}

  // public getAllComments() {
  //   this.commentService.showComments(this.postID).subscribe({
  //     next: (comments) => {
  //       this.comments = comments;
  //       console.log(comments);
  //     },
  //   });
  // }
}
