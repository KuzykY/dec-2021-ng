import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../../interfaces/user.interface";
import {Observable} from "rxjs";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser>{

  constructor(private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    let {id} = route.params;
    return this.userService.getById(id);
  }
}
