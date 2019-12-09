import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService, AppConfigValues } from './app-config.service';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DebugConfigService extends AppConfigService {
  public constructor(private storage: AppStorageService, http: HttpClient) {
    super(http);
  }

  public get<T>(key: string, defaultValue?: T): T {
    if (key === AppConfigValues.SEARCH) {
      return <T>(
        (JSON.parse(this.storage.getItem(key)) ||
          super.get<T>(key, defaultValue))
      );
    } else {
      return <T>(
        (<any>this.storage.getItem(key) || super.get<T>(key, defaultValue))
      );
    }
  }
}
