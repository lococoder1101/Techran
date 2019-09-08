import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthorComponent } from './author/author.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorComponent,
    FooterComponent,
    NewsComponent,
    ContactComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
