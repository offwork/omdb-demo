import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [LayoutContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LayoutContainerComponent
  ]
})
export class ShellModule { }
