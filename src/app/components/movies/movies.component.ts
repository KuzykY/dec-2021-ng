import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IMovie} from "../../interfaces/movie.interface";
import {MovieService} from "../../services/movie.service";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MoviesComponent implements OnInit {
  movies: IMovie[];
  page: number;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(value => this.page = +value['page'])

    if (!this.page) {
      this.movieService.getAll(this.page = 1).subscribe(value => {
        this.movies = value.results
      })
    } else {
      this.movieService.getAllByPage(this.page).subscribe(value => {
        this.movies = value.results
      })
    }
  }

  next(): void {
    this.page = this.page + 1

    this.router.navigate([''], {queryParams: {page: this.page}})
    this.movieService.getAllByPage(this.page).subscribe(value => {
      this.movies = value.results
    })
  }

  prev() {
    this.page = this.page - 1
    this.router.navigate([''], {queryParams: {page: this.page}})
    this.movieService.getAllByPage(this.page).subscribe(value => {
      this.movies = value.results
    })
  }
}

