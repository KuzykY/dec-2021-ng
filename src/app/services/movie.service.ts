import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IMovies} from "../interfaces/movie.interface";
import {urls} from "../constans/urls";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movies)
  }
  getDetails(id:string):Observable<IMovie>{
    return this.httpClient.get<IMovie>(`${urls.movieId}${id}`)
  }
  getAllByPage(page:number):Observable<any>{
    return this.httpClient.get<any>(`${urls.movies}?page=${page}`)
  }
}
