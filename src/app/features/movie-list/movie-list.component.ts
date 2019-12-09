import { ChangeDetectionStrategy, Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MovieListFacade } from './+state/list.facade';
import { AppConfigService, AppStorageService } from '@core/config';
import { take } from 'rxjs/operators';

@Component({
  selector: 'omdb-movie-list',
  template: `
    <cdk-virtual-scroll-viewport itemSize="100" minBufferPx="100" maxBufferPx="100" (scrolledIndexChange)="nextBatch($event)">
      <ng-container *cdkVirtualFor="let item of (vm.list$ | async).results; let i = index; trackBy: trackByIdx">
        <div class="list-item" (click)="selectedMovie(item, i)">
          <div class="avatar">
            <img [src]="posterUrl+item.poster_path" />
          </div>
          <div class="item-content">
            <span class="badge">{{ item.title }}</span><br>
            <span class="badge">{{ item.release_date }}</span>
            <div class="name">{{ item.overview | slice:0:140 }}...</div>
          </div>
        </div>
      </ng-container>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
    `
      cdk-virtual-scroll-viewport{ height: 675px; }
      .list-item {
        border-bottom: 1px solid rgb(131, 102, 210);
        background: white;
        font-size: 1em;
        padding: 1em;
        line-height: 1.2em;
        cursor: pointer;
        display: flex;
      }

      .avatar {
        min-width: 96px;
        max-height: 143px;
        border-radius: 10px;
        background:#3d4f5d;
        color: #fff;
        overflow: hidden;
        float: left;
        border: #3f51b5 solid 2px;
      }

      .avatar > img {
        max-height: 143px;
      }

      .item-content {
        padding-left: 16px;        
      }

      .item-content .name {
        font-weight: 300;
      }

      .item-content .badge {
        color: rgb(116, 116, 121);
        line-height: 2;
        font-weight: bold;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport, { static: true })
  public viewport: CdkVirtualScrollViewport;
  public posterUrl: string;
  public loading: boolean = false;
  public pageSize = 21;
  public pageCounter = 1;
  public scrollIdex: number;

  public constructor(
    public vm: MovieListFacade,
    private config: AppConfigService,
    private storage: AppStorageService,
    private route: Router) {
    this.posterUrl = this.config.vars.posterUrl;
  }

  public selectedMovie(item: any, index) {
    this.storage.setItem('scrollID', index);
    this.route.navigate(['/list', item.id])
  }

  public nextBatch($event) {
    if (this.pageCounter < (this.pageSize - 1) / 2) {
      if(($event % this.pageSize === 0) && $event !== 0) {
        this._nextBatch(this.pageCounter++);
      }
    }
  }

  public trackByIdx(i) {
    return i;
  }

  public ngAfterViewInit() {
    console.log('AfterViewInit')
    this.vm.getMovieList({
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
    });

    setTimeout(() => {
      this.vm.list$.pipe(take(1)).subscribe(src => {
        if (this.storage.getItem('scrollID')) {
          const index = Number(this.storage.getItem('scrollID'));
          if (src.results.length > index) {
            this.viewport.scrollToIndex(index, 'smooth');
          }
        }
      });
    }, 500);
  }

  private _nextBatch(page: number) {
    this.vm.getMovieList({
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: false,
      include_video: false,
      page: page,
    });
  }
}
