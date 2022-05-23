import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes:Routes=[
  {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'users',pathMatch:'full'},
      {path:'users',loadChildren:()=>import('./module/user/user.module').then(value=>value.UserModule)},
      {path:'posts',loadChildren:()=>import('./module/post/post.module').then(value=>value.PostModule)},
      {path:'comments',loadChildren:()=>import('./module/comment/comment.module').then(value=>value.CommentModule)}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
