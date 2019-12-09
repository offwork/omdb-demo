import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, AppConfigService, DebugConfigService } from '@core/config';
import { ClientApiModule, ClientApiService } from '@core/client-api';
import { ShellModule } from '@core/shell/shell.module';
import { SharedModule } from '@shared/shared.module';
import { MovieListState } from './features/movie-list/+state/list.state';
import { MovieDetailsState } from './features/movie-details/+state/details.state';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ShellModule,
    CoreModule.forRoot(),
    ClientApiModule.forRoot(),
    NgxsModule.forRoot([MovieListState, MovieDetailsState], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: AppConfigService, useClass: DebugConfigService },
    ClientApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
