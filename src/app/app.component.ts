import { Component } from '@angular/core';
import { Http, Jsonp, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorBuildTypes = [];
  private successfulBuildTypes = [];

  constructor(private http: Http, private jsonp: Jsonp) {
    let buildTypes$ = http.get('http://localhost:8080/buildTypes')
      .switchMap(buildTypes => Observable.from(buildTypes.json()))
      .share();
      
      buildTypes$.filter((element: any) => element.builds.build[0] && element.builds.build[0].status === 'FAILURE')
        .toArray()
        .subscribe(errorBuildTypes => this.errorBuildTypes = errorBuildTypes);

      buildTypes$.filter((element: any) => element.builds.build[0] && element.builds.build[0].status === 'SUCCESS')
        .toArray()
        .subscribe(successfulBuildTypes => this.successfulBuildTypes = successfulBuildTypes);
  }
}
