import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@core/config';
import { ClientApiModule } from '@core/client-api';
import { SharedModule } from '@shared/shared.module';
import { MovieDeatilsComponent } from './movie-deatils.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDeatilsComponent
  }
];

@NgModule({
  declarations: [MovieDeatilsComponent],
  imports: [
    CommonModule,
    CoreModule.forChild(),
    ClientApiModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieDetailsModule { }
