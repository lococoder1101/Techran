import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  news: Object;
  authors;
  private json: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getNews().subscribe(data => {
        this.news = data
        console.log(this.news);
      }
    );
    this.data.getAuthor().subscribe(data => {
        this.authors = data
        console.log(this.authors);
      }
    );
  }
  getAutorProfile(userId: any) {
    for(let i=0; i<this.authors.length; i++){
      if (userId===this.authors[i].id){
        return this.authors[i].name ;
      }
    };
  }

  getProfileImages(userId:any){
    return this.data.getProfileImage(userId);
  }
}
