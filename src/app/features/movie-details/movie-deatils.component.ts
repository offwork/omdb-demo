import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { AppConfigService } from '@core/config';
import { MovieDetailsFacade } from './+state/details.facade';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'omdb-movie-deatils',
  templateUrl: './movie-deatils.component.html',
  styleUrls: ['./movie-deatils.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MovieDeatilsComponent implements AfterViewInit {
  public posterUrl: string;
  public movieID: string;

  public constructor(
    public vm: MovieDetailsFacade,
    private config: AppConfigService,
    private route: ActivatedRoute) {
      this.movieID = this.route.snapshot.paramMap.get('id');
      this.posterUrl = this.config.vars.posterUrl;
  }

  public ngAfterViewInit() {
    this.vm.getMovie(this.movieID);
  }
}
