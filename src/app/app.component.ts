import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private buildTypes;

  constructor(private http: Http) {
    http.get('https://teamcity.jetbrains.com/guestAuth/app/rest/buildTypes?fields=buildType(id,name,builds($locator(running:false,canceled:false,count:1),build(number,status)))')
      .subscribe(buildTypes => this.buildTypes = buildTypes);
  }
}
