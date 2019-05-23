import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3000/';
  name: string = "This is name";
  constructor(public http: HttpClient) { }

  createNewUser(userData) {
    return this.http
      .post(this.baseUrl + 'shared/signup', userData);
  }
}
