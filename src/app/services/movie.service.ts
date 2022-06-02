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
  getAll(page: number = 1):Observable<IMovies>{
    return this.httpClient.get<IMovies>(urls.movies, {params: {page}})
  }
  getDetails(id:string):Observable<IMovie>{
    return this.httpClient.get<IMovie>(`${urls.movieId}${id}`)
  }
  getAllByPage(page:number):Observable<any>{
    return this.httpClient.get<any>(`${urls.movies}?page=${page}`)
  }
  getALlByGenre(genreId:number):Observable<{page: number; results: IMovies[]}>{
    return  this.httpClient.get<{page: number; results: IMovies[]}>(urls.genres +`:${genreId}` + `/movies`)
  };
}
