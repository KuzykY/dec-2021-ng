import {IGenres} from "./genre.interface";

export interface IMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
export interface IMovie {
  adult:boolean,
  backdrop_path:string,
  genre_ids:IGenres[],
  id:string,
  original_language:string,
  original_title:string,
  overview:string,
  popularity:string,
  poster_path:string,
  release_date:string,
  title:string,
  vote_average:string,
  vote_count:string
}
