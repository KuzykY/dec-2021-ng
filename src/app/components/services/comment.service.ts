import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../constans/urls";
import {IComment} from "../../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getAll():Observable<IComment[]>{
    return this.http.get<any[]>(urls.comments)
}
}
