import {MovieList} from './list';

export interface MoviePage {
  page?: number;
  total_results?: number;
  total_pages?: number;
  results: MovieList[];
}