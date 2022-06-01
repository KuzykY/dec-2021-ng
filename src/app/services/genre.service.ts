import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenres} from "../interfaces/genre.interface";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor( private httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get<any>(urls.genres)
  }
}
