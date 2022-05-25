import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constans/urls";
import {IUser} from "../interfaces/user.interface";
import {IToken} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private accessTokenKey='access'
  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }
  login(user:IUser):Observable<IToken>{
    return this.httpClient.post<IToken>(urls.auth,user)
  }
  setToken(token:IToken):void{
    localStorage.setItem(this.accessTokenKey,token.access)
  }
  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }
}
