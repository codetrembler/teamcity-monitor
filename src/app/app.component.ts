import { Component, ElementRef } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorBuildTypes = [];
  private successfulBuildTypes = [];

  constructor(private http: Http, private elementRef: ElementRef) {
    let buildTypes$ = http.get('buildTypes')
      .switchMap(buildTypes => Observable.from(buildTypes.json()))
      .share();
      
      buildTypes$.filter((element: any) => element.builds.build[0] && element.builds.build[0].status === 'FAILURE')
        .toArray()
        .subscribe(errorBuildTypes => this.errorBuildTypes = errorBuildTypes);

      buildTypes$.filter((element: any) => element.builds.build[0] && element.builds.build[0].status === 'SUCCESS')
        .toArray()
        .subscribe(successfulBuildTypes => this.successfulBuildTypes = successfulBuildTypes);

      // Observable.interval(2000)
      //   .map(value => value * 220)
      //   .subscribe(value => console.log(elementRef.nativeElement));
  }
}
