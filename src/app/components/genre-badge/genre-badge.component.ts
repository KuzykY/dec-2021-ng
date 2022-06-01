import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../services/genre.service";
import {IGenres} from "../../interfaces/genre.interface";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
  genres: IGenres[];

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(value => this.genres = value.genres)

  }

}
