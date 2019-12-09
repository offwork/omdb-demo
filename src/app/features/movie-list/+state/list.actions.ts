import { MoviePage } from '../models';

export class MovieListLoad {
  public static readonly type = '[Movie List] Load';
  public constructor(public payload: any) { }
}

export class MovieListSuccess {
  public static readonly type = '[Movie List] Success';
  public constructor(public payload: MoviePage) { }
}

export class MovieListFailure {
  public static readonly type = '[Movie List] Failure';
  public constructor(public payload: any) { }
}
