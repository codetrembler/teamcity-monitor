import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authenticationError: boolean = false;
  private credentials = {};

  constructor() {
  }

  onSubmit() {
    console.log('submit');
    this.login(this.credentials);
  }

  private login(credentials) {/*
    let headers = credentials ? { authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password) } : {},
      promise: ng.IHttpPromise<any> = this.Http.get('user', {headers : headers});

    promise.then(response => {
      this.setPrincipal(response.data.principal);

      if (this.principal && this.principal.authenticated) {
        this.$location.path('/');
      }
    }, () => {
      this.setPrincipal(undefined);
    });

    return promise;*/
  }

}