import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie:IMovie
  constructor(private movieService:MovieService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.movieService.getDetails(id).subscribe((value)=>this.movie=value)
    })
  }

}
