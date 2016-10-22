import { Component } from '@angular/core';
import { Http, Jsonp, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private errorBuildTypes = [];
  private successfulBuildTypes = [];

  constructor(private http: Http, private jsonp: Jsonp) {
    http.get('http://localhost:8080/buildTypes')
      .subscribe(buildTypes => {
        let buildType = buildTypes.json().buildType;
        this.errorBuildTypes = buildType.filter((element) => element
          && element.builds
          && element.builds.build[0]
          && element.builds.build[0].status === 'FAILURE'
        );

        this.successfulBuildTypes = buildType.filter((element) => element
          && element.builds
          && element.builds.build[0]
          && element.builds.build[0].status === 'FAILURE'
        );
      });
  }
}
