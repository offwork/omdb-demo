import { Inject } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export type HttpObserve = 'body' | 'events' | 'response';

export abstract class BaseApi {

  public constructor(@Inject(HttpClient) httpClient: HttpClient) {}

  /**
   * Construct a request which interprets the body as JSON and returns the full response.
   *
   * @return an `Observable` of the `HttpResponse` for the request, with a body type of `R`.
   */
  abstract clientRequest(method: string, url: string, options?: {
    body?: any;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    observe?: HttpObserve;
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
  }): Observable<any>;
}