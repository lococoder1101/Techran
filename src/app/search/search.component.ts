import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from 'src/app/data.service';
import {debounceTime, map} from 'rxjs/operators';
import { Router } from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public model: any;


  // @ts-ignore
  @ViewChild('div') div: ElementRef;
  private authors: any;

  constructor(private  dataService: DataService, private renderer: Renderer2,private router: Router) {}

  ngOnInit() {
    this.dataService.getAuthor().subscribe(data => {
      this.authors = data
    });

  }


search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : this.authors.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )
formatter = (x: { name: string }) => x.name;
  highlightAuthor: any;


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

