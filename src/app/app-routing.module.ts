import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {AuthorComponent} from "./author/author.component";
import {ContactComponent} from "./contact/contact.component";
import {PostsComponent} from "./posts/posts.component";
import {AuthorsComponent} from "./authors/authors.component";

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: 'posts', component: PostsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'authors', component: AuthorsComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ]
})
export class AppRoutingModule { }
