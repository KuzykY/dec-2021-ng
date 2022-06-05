import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module"
import {BarRatingModule} from "ngx-bar-rating";

import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {MovieComponent} from './components/movie/movie.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {StarsRatingComponent} from './components/stars-rating/stars-rating.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {GenreBadgeComponent} from './components/genre-badge/genre-badge.component';
import {MainInterceptor} from "./main.interceptor";
import { GenreComponent } from './components/genre/genre.component';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailsComponent,
    StarsRatingComponent,
    UserInfoComponent,
    GenreBadgeComponent,
    GenreComponent,
    MoviesByGenreComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        BarRatingModule,
        NgxStarRatingModule,
      ReactiveFormsModule,
      FormsModule

    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: MainInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
