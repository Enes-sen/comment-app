import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertservService } from '../services/alertserv.service';
import { CommentservService } from '../services/commentserv.service';
import { Comment } from './comment';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.css']
})
export class CommentformComponent {
  commentModel: Comment = new Comment();

  constructor(
    private alertServ: AlertservService,
    private commentServ: CommentservService
  ) {}

  addComment(form: NgForm) {
    if (form.invalid) {
      return this.alertServ.danger('gerekli alanlar boş');
    }
    console.log("writer:", this.commentModel.writername, ", content:", this.commentModel.content);

    this.commentServ.addNewComment(this.commentModel).subscribe((data) => {
      console.log('comment data:', data);
      if (data.success === false) {
        this.alertServ.danger(data.message);
      } else {
        this.alertServ.success(data.message);
        this.commentServ.commentAddedSuccessfully();
        form.resetForm();
      }
    });
  }
}
