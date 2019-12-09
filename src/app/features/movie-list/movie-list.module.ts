import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@core/config';
import { ClientApiModule } from '@core/client-api';
import { SharedModule } from '@shared/shared.module';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { MovieListComponent } from './movie-list.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  }
];


@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    ClientApiModule,
    VirtualScrollerModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class MovieListModule { }
