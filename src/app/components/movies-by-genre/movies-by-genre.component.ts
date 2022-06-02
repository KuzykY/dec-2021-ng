import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie, IMovies} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
movie:IMovies[]
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getALlByGenre(28).subscribe(value => this.movie=value.results)
  }

}
