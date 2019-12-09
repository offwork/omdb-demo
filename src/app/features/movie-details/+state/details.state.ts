import { State, Action, StateContext } from '@ngxs/store';
import { MovieDetailsSuccess } from './details.actions';
import { Movie } from '../models'

@State<Movie>({
  name: 'movieDetails',
  defaults: null
})
export class MovieDetailsState {
  @Action(MovieDetailsSuccess)
  private persistLoad(ctx: StateContext<Movie>, { payload }: MovieDetailsSuccess) {
    ctx.setState(payload);
  }
}