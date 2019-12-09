import { State, Action, StateContext } from '@ngxs/store';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { MovieListSuccess } from './list.actions';
import { MoviePage } from '../models'

@State<MoviePage>({
  name: 'movieList',
  defaults: {
    page: 0,
    total_results: 0,
    total_pages: 0,
    results: [],
  }
})
export class MovieListState {
  @Action(MovieListSuccess)
  private persistLoad(ctx: StateContext<MoviePage>, { payload }: MovieListSuccess) {
    const results = ctx.getState().results.concat(payload.results);
    
    ctx.setState({
      page: payload.page,
      total_pages: payload.total_pages,
      total_results: payload.total_results,
      results: results
    });
  }
}