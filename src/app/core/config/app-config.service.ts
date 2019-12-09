import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ObjectUtils } from '@shared/utilities/object-utils';


export enum AppConfigValues {
  BASEURL = 'apiBaseUrl',
  POSTERURL = 'posterUrl',
  API_KEY = 'apiKey',
  SEARCH = 'search'
}

export enum Status {
  INIT = 'init',
  LOADING = 'loading',
  LOADED = 'loaded'
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public vars: any = {
    application: {
      name: 'OMDB Demo -> [DEPIXEN]'
    },
    serdooRepositoryName: 'omdb-demo'
  };

  public status: Status = Status.INIT;
  public onLoad: Observable<any>;
  protected onLoadSubject: Subject<any>;

  public constructor(private http: HttpClient) {
    this.onLoadSubject = new Subject();
    this.onLoad = this.onLoadSubject.asObservable();
  }

  /**
   * Loads the config file.
   * @returns Notification when loading is complete
   */
  public load(): Promise<any> {
    return new Promise(async resolve => {
      const configUrl = `app.config.json?v=${Date.now()}`;

      if (this.status === Status.INIT) {
        this.status = Status.LOADING;
        await this.http.get(configUrl).subscribe(
          (data: any) => {
            this.status = Status.LOADED;
            this.vars = { ...this.vars, ...(data || {}) };
            this.onLoadSubject.next(this.vars);
            resolve(this.vars);
          },
          () => {
            resolve(this.vars);
          }
        );
      } else if (this.status === Status.LOADED) {
        resolve(this.vars);
      } else if (this.status === Status.LOADING) {
        this.onLoad.subscribe(() => {
          resolve(this.vars);
        });
      }
    });
  }

  /**
   * Requests notification of a property value when it is loaded.
   * @param property The desired property value
   * @returns Property value, when loaded
   */
  public select(property: string): Observable<any> {
    return this.onLoadSubject.pipe(
      map(config => config[property]),
      distinctUntilChanged()
    );
  }

    /**
   * Gets the value of a named property.
   * @param key Name of the property
   * @param defaultValue Value to return if the key is not found
   * @returns Value of the property
   */
  public get<T>(key: string, defaultValue?: T): T {
    let result: any = ObjectUtils.getValue(this.vars, key);
    if (typeof result === 'string') {
      const keywords = new Map<string, string>();
      // extra keywords mapping
      // keywords.set('hostname', location.hostname);
      result = this.formatString(result, keywords);
    }
    if (result === undefined) {
      return defaultValue;
    }
    return <T>result;
  }

  private formatString(str: string, keywords: Map<string, string>): string {
    let result = str;

    keywords.forEach((value, key) => {
      const expr = new RegExp('{' + key + '}', 'gm');
      result = result.replace(expr, value);
    });

    return result;
  }
}
