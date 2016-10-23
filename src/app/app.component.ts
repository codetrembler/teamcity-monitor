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
      .switchMap(buildTypes => {
        let arr = buildTypes.json().buildType;
        return Observable.from(arr);
      })
      .share();
      
      buildTypes$.filter(element => element.builds.build[0] && element.builds.build[0].status === 'FAILURE')
        .toArray()
        .subscribe(errorBuildTypes => this.errorBuildTypes = errorBuildTypes);

      buildTypes$.filter(element => element.builds.build[0] && element.builds.build[0].status === 'SUCCESS')
        .toArray()
        .subscribe(successfulBuildTypes => this.successfulBuildTypes = successfulBuildTypes);
  }
}
