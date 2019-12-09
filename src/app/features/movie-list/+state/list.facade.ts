import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, throttleTime, debounceTime } from 'rxjs/operators';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { ClientApiService } from '@core/client-api';
import { MovieQuery, MoviePage } from '../models';
import { MovieListState } from './list.state';
import { MovieListSuccess } from './list.actions';

@Injectable({ providedIn: 'root' })
export class MovieListFacade {
  @Select(MovieListState)
  public list$: Observable<MoviePage>;

  @Dispatch()
  public getMovieList(query: MovieQuery) {
    return this.client
      .clientRequest('GET', '/discover/movie', null, query)
      .pipe(
        debounceTime(300),
        map(res => new MovieListSuccess(res))
      );
  }

  public constructor(private client: ClientApiService) {}
}