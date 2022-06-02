import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IMovie} from "../../interfaces/movie.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Output() mode = new EventEmitter<boolean>();

  @Input()
  movie:IMovie;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
  }

  getDetails() {
    this.activatedRoute.queryParams.subscribe(({page})=>{
      this.router.navigate([`${this.movie.id}`],{relativeTo:this.activatedRoute,queryParams:{page}})
        .then(()=>{})
    })
  }
}
