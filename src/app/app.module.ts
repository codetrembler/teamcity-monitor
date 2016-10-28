import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';

import { AppComponent } from './app.component';

import { ErrorBuildTypesComponent } from './error-build-types/error-build-types.component';
import { SuccessfulBuildTypesComponent } from './successful-build-types/successful-build-types.component';
import { LoginComponent } from './login/login.component';

import { HttpRequestOptions } from './http-request-options';

@NgModule({
  declarations: [
    AppComponent,
    ErrorBuildTypesComponent,
    SuccessfulBuildTypesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: RequestOptions, useClass: HttpRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
