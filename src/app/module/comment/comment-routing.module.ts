import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentResolveService} from "./services/resolvers/comment-resolve.service";
import {CommentGuard} from "./guard/comment.guard";

const routes: Routes = [
  {path:'',component:CommentsComponent,
    canActivate:[CommentGuard],
    children:[
      {path:':id',component:CommentDetailsComponent,resolve:{data:CommentResolveService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
