import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../model/user.interface";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`)
  }
}
