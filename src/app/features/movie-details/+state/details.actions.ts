import { Movie } from '../models';

export class MovieDetailsLoad {
  public static readonly type = '[Movie Details] Load';
  public constructor(public payload: any) { }
}

export class MovieDetailsSuccess {
  public static readonly type = '[Movie Details] Success';
  public constructor(public payload: Movie) { }
}

export class MovieDetailsFailure {
  public static readonly type = '[Movie Details] Failure';
  public constructor(public payload: any) { }
}
