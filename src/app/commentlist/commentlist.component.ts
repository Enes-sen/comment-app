import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Comment } from '../commentform/comment';
import { AlertservService } from '../services/alertserv.service';
import { CommentservService } from '../services/commentserv.service';

@Component({
  selector: 'app-commentlist',
  templateUrl: './commentlist.component.html',
  styleUrls: ['./commentlist.component.css']
})
export class CommentlistComponent implements OnInit {

  comments: Comment[];
  constructor(
    private CommentServ: CommentservService,
    private alertServ: AlertservService
  ) { }
  ngOnInit(): void {
    this.getComments();
    this.CommentServ.onChanges().subscribe(() => {

      this.getComments();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['comments']) {
      console.log('comments değişti:', this.comments, "changes:", changes);
    }
  }

getComments(){
  this.CommentServ.getcomments().subscribe((data) => {
    console.log("data:", data);
    this.comments = data.comments;
    this.comments.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  });
}
commentdel(Comment:Comment) {
  try {
    this.CommentServ.deleteAComment(Comment).subscribe((data)=>{
      if(data.success===false){
        this.alertServ.danger(data.message);
      }else{
        this.alertServ.success(data.message)
      }
    })
  } catch (err) {
    this.alertServ.danger(err.message);
  }
}

}
