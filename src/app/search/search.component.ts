import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from 'src/app/data.service';
import {debounceTime, map} from 'rxjs/operators';


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

  constructor(private  dataService: DataService, private renderer: Renderer2) {}

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

addElement(name: string, image: string) {
  const p: HTMLParagraphElement = this.renderer.createElement('li');
  p.className = 'list-inline-item';
  p.innerHTML =
    // tslint:disable-next-line:max-line-length
    '<button   class="btn" style="font-size: 12px;margin: 5px"><img style="height: 30px;width: 30px;margin-right: 5px" src=' + image + '>' +
    name + '</button>';


  this.renderer.appendChild(this.div.nativeElement, p);
}

  getProfileImages(userId:any){
    return this.dataService.getProfileImage(userId);
  }

}

