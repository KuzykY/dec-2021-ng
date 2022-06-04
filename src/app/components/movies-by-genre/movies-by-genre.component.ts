import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  movies: IMovie[];
  page: number = 1

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let id = value['id']
      this.movieService.getMovieByGenre(id).subscribe(data => this.movies = data)
    })
  }
}



