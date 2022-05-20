import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../../../constans/urls";
import {IUser} from "../../user/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts)
  }
  getById(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
