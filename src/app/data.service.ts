import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNews(){
    // return this.http.get('https://reqres.in/api/users')
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }


}
