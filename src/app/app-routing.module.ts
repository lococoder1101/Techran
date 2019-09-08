import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {AuthorComponent} from "./author/author.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'authors', component: AuthorComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ]
})
export class AppRoutingModule { }
