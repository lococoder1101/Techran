import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  public model: any;


  // @ts-ignore
  @ViewChild('div') div: ElementRef;
   authors: any;

  constructor(private  dataService: DataService, private renderer: Renderer2,private router: Router) {}

  ngOnInit() {
    this.dataService.getAuthor().subscribe(data => {
      this.authors = data
    });

  }
  getProfileImages(userId:any){
    return this.dataService.getProfileImage(userId);
  }

  goToAuthorPage(id: any) {
    var myurl = '/author/'+id;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
