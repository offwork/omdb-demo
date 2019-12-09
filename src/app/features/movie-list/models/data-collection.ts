import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

export class MovieDataCollection extends DataSource<any | undefined> {
  public connect(collectionViewer: CollectionViewer): Observable<any[] | readonly any[]> {
    throw new Error("Method not implemented.");
  }
  
  public disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.");
  }
}