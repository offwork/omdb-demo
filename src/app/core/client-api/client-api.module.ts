import { NgModule, ModuleWithProviders, Provider, Injector, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientApiService } from './client-api.service';
import { AppConfigService } from '../config/app-config.service';

export function clientAPIFactory(http: HttpClient, config: AppConfigService): ClientApiService {
  return new ClientApiService(http, config);
}

export const HTTP_INTERCEPTOR_PROVIDER: Provider = {
  provide: ClientApiService,
  useFactory: clientAPIFactory,
  deps: [HttpClient, new Optional(), AppConfigService]
};

@NgModule({
  declarations: [],
  imports: []
})
export class ClientApiModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClientApiModule,
      providers: [ HTTP_INTERCEPTOR_PROVIDER ]
    }
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ClientApiModule,
      providers: [ HTTP_INTERCEPTOR_PROVIDER ]
    }
  }
}
