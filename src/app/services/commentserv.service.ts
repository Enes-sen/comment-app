import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap,Subject } from 'rxjs';
import { Comment } from '../commentform/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentservService {
  apiurl ="https://comment-api.onrender.com/api/comment"
  private commentAddedSubject = new Subject<void>();
  constructor(
    private httpReq: HttpClient
  ) { }

  addNewComment(data:Comment): Observable<any> {
    try {
      let newpath = this.apiurl + '/addOne';
      return this.httpReq.post(newpath, data).pipe(
        tap((data) => {
          console.log('delete res 2:', data);
          this.commentAddedSubject.next(data);
        })
      );
    } catch (err) {
      console.log('message of err:', err);
      throw err;
    }
  }
  deleteAComment(comment:Comment): Observable<any>{
   try {
    let newpath = this.apiurl + '/deleteOne/'+comment._id;
    return this.httpReq.delete(newpath).pipe(
      tap((data) => {
        console.log('delete res 2:', data);
        this.commentAddedSubject.next(data);
      })
    )
   } catch (err) {
    console.log("err:",err.message);
    throw err.message
   }
  }
  getcomments(): Observable<any>{
    try {
      let newpath = this.apiurl;
       return this.httpReq.get(newpath).pipe(
        tap((data) => {
          console.log('delete res 2:', data);
        })
      );
    } catch (err) {
      console.log('message of err:', err);
      throw err;
    }
  }
  commentAddedSuccessfully() {
    return this.commentAddedSubject.next()
  }

  onChanges(): Observable<any> {
    return this.commentAddedSubject.asObservable();
  }
}
