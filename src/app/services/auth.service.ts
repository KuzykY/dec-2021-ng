import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  register(user:IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(urls.users,user)
  }
}
