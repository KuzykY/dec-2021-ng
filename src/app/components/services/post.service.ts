import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../../models/IPost";
import {urls} from "../../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http:HttpClient) { }
  getAll():Observable<IPost[]>{
    return this.http.get<any[]>(urls.posts)
  }
}
