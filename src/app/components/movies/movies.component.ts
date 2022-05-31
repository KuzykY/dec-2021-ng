import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[];

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
      this.movieService.getAll().subscribe(value =>this.movies=value.results)
    }
}
