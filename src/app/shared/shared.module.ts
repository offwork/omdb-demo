import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignLibModule } from './design-lib/design-lib.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DesignLibModule
  ],
  exports: [DesignLibModule]
})
export class SharedModule {}
