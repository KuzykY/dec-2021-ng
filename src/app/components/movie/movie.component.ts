import {Component, Input, OnInit, Output} from '@angular/core';

import {IMovie} from "../../interfaces/movie.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  rate: number
  @Input()
  movie: IMovie;
  public form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private movieService: MovieService,private formBuilder:FormBuilder) {

  this.form=this.formBuilder.group({
    rating:['']
  })
}
rating(avg:number):number{
  return Math.round(avg/2)
}
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({id}) => {
    //   this.movieService.getDetails(id).subscribe((movie) => {
    //     this.movie = movie
    //   })
    // })
  }

  getDetails() {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.router.navigate([`${this.movie.id}`], {relativeTo: this.activatedRoute, queryParams: {page}})
        .then(() => {
        })
    })
  }
}
