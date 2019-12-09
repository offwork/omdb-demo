import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startupServiceFactory } from './startup-service-factory';
import { AppProvideApiService } from './app-provide-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [AppProvideApiService],
        multi: true
      }]
    }
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [AppProvideApiService],
        multi: true
      }]
    }
  }
}
