import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {IUser} from "../../models/IUser";
import {urls} from "../../constans/urls";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }
  getAll():Observable<IUser[]>{
    return this.http.get<any[]>(urls.users)
  }
  getById(id:number):Observable<IUser>{
    return this.http.get<any>(urls.users+'/'+id)
  }
}
