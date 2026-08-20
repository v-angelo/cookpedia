import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment';

// @Service()
@Injectable({
  providedIn: 'root',
})
export class Api {
  http = inject(HttpClient);

  serverUrl: string = environment.apiUrl;

  constructor() {
    console.log('API URL:', this.serverUrl);
  }

  //   register user api
  registerAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/register`, reqBody);
  }

  // login user api
  loginAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/login`, reqBody);
  }
}
