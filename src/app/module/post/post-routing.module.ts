import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostResolveService} from "./services/resolvers/post-resolve.service";

const routes: Routes = [
  {path:'',component:PostsComponent,children:[
      {path:':id',component:PostDetailsComponent,resolve:{data:PostResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
