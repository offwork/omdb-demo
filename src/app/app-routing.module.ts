import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutContainerComponent } from '@core/shell';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: 'list',
    component: LayoutContainerComponent,
    children: [
      {
        path: '',
        loadChildren: './features/movie-list/movie-list.module#MovieListModule'
      },
      {
        path: ':id',
        loadChildren: './features/movie-details/movie-details.module#MovieDetailsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
