import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { ClientApiService } from '@core/client-api';
import { Movie } from '../models';
import { MovieDetailsState } from './details.state';
import { MovieDetailsSuccess } from './details.actions';

@Injectable({ providedIn: 'root' })
export class MovieDetailsFacade {
  @Select(MovieDetailsState)
  public movie$: Observable<Movie>;

  @Dispatch()
  public getMovie(id: string) {
    return this.client
      .clientRequest('GET', `/movie/${id}`)
      .pipe(
        map(res => {
          return new MovieDetailsSuccess(res);
        }),
      );
  }

  public constructor(private client: ClientApiService) {}
}