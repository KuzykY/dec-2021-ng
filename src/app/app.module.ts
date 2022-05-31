import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {MovieComponent} from './components/movie/movie.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {StarsRatingComponent} from './components/stars-rating/stars-rating.component';
import {PosterPreviewComponent} from './components/poster-preview/poster-preview.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {GenreBadgeComponent} from './components/genre-badge/genre-badge.component';

import {MainInterceptor} from "./main.interceptor";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailsComponent,
    StarsRatingComponent,
    PosterPreviewComponent,
    UserInfoComponent,
    GenreBadgeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
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
