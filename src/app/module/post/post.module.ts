import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostResolveService} from "./services/resolvers/post-resolve.service";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers:[
    PostService,
    PostResolveService
  ]
})
export class PostModule { }
