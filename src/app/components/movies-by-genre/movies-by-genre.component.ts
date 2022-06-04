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
  page: number

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.movieService.getMovieByGenre(id).subscribe(responce => {
        const {results} = responce
        this.movies=results
    })
  })
}
}


