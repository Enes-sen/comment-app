import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { CommentformComponent } from './commentform/commentform.component';
import { CommentlistComponent } from './commentlist/commentlist.component';
import { AlertservService } from './services/alertserv.service';
import { CommentservService } from './services/commentserv.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentformComponent,
    CommentlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertservService,CommentservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
