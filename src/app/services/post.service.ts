import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../model/post.interface";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) {
  }
  getAll():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts)
  }
  getById(id:string):Observable<IPost>{
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
