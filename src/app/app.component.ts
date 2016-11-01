import { Component, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BuildType } from './shared/buildType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorBuildTypes = [];
  private successfulBuildTypes = [];

  constructor(private http: Http, private elementRef: ElementRef) {
    let buildTypes$ = Observable.interval(120000)
      .flatMap(() => this.getBuildTypes())
      .subscribe(buildTypes => {
        this.errorBuildTypes = buildTypes.filter(element => element.builds.build[0] && element.builds.build[0].status === 'FAILURE');
        this.successfulBuildTypes = buildTypes.filter(element => element.builds.build[0] && element.builds.build[0].status === 'SUCCESS');
      });
  }

  private getBuildTypes(): Observable<Array<BuildType>> {
    return this.http.get('buildTypes')
      .map(buildTypes => buildTypes.json());
  }
}
