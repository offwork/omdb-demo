import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseApi } from './base-api';
import { AppConfigService } from '@core/config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService extends BaseApi  {
  constructor(@Inject(HttpClient) private httpClient: HttpClient, @Optional() private config: AppConfigService) { 
    super(httpClient);
  } 

  public clientRequest(method: string, url: string, body?: any | null, options?: {}): Observable<any> {
    const { apiBaseUrl, apiKey } = this.config.vars;
    const param = {...{'api_key': `${apiKey}`}, ...options};

    return this.httpClient.request(method, `${apiBaseUrl}${url}`, {
      body: body,
      headers: new HttpHeaders(),
      params: param,
      observe: 'body',
      reportProgress: false,
      responseType: 'json',
      withCredentials: false,
    }).pipe( catchError(this.handleError) );
  }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }

    return throwError(`Something bad happened; please try again later. ${error.message}`);
  }
}
