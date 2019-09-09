import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../data.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  id: any;
  authors;
  selectedPost;
  news:any;
  author;
   userId: any;
   authorsNews:any=[];

  constructor(private route: ActivatedRoute, private data: DataService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.data.getNews().subscribe(data => {
        this.news = data
      for(let i=0; i<this.news.length; i++){
        if (this.id==this.news[i].userId){
           this.authorsNews.push(this.news[i]) ;
        }
      };
      }
    );

    this.data.getAuthor().subscribe(data => {
        this.authors = data;
        for (let i = 0; i < this.authors.length; i++) {
          if (this.id == this.authors[i].id) {
            this.author = this.authors[i];

          }
        }
      }
    );
  }
  getProfileImages(userId:any){
    return this.data.getProfileImage(userId);
  }

  postDetail(post: any) {
    alert(this.author.email+' '+post.body)
  }
}
