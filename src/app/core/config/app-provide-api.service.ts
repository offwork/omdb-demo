import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppProvideApiService {
  public constructor(
    protected appConfig: AppConfigService,
    protected storage: AppStorageService
  ) {}

  public async load() {
    await this.appConfig.load().then((resolve) => {
      this.initOmdbApi(resolve);
    });
  }

  protected initOmdbApi(res) {
    // TODO: The paths of Silent URL, Base URL, and API router
    // that the application needs are must configure here.
    // console.log('... do sometimes serdo api initialized!!!', res);
  }
}
