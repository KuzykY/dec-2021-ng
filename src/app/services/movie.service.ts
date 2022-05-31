import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovies} from "../interfaces/movie.interface";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movies)
  }
}
