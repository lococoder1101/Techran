import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
profileImages =[
  '//ware.uncox.com/asset/profile/female/48.jpg',
  '//ware.uncox.com/asset/profile/male/95.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
  '//ware.uncox.com/asset/profile/female/59.jpg',
  './assets/l.jpg',
  '//ware.uncox.com/asset/profile/female/62.jpg',
  './assets/ll.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  './assets/kk.jpg',
  './assets/lk.jpg',
  '//ware.uncox.com/asset/profile/female/48.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  '//ware.uncox.com/asset/profile/male/95.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg',
  '//ware.uncox.com/asset/profile/female/59.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
  '//ware.uncox.com/asset/profile/female/62.jpg',
  '//ware.uncox.com/asset/profile/female/48.jpg'];

  constructor(private http: HttpClient) { }

  getNews(){
    // return this.http.get('https://reqres.in/api/users')
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }
  getAuthor(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getProfileImage(userId:any){
    var i;
    // i=Math.floor((Math.random() * 5) );
  return this.profileImages[userId-1];
  }


}
