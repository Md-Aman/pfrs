import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000/';
  name: string = "This is name";

  currentUser: any = null;

  private raSubject = new BehaviorSubject('');
  currentChanges = this.raSubject.asObservable();

  constructor(public http: HttpClient) { }


  changeTabs(data: any) {
    this.raSubject.next(data);
  }
  detectTabChanges(type, data) {
    const changes = {
      type: type,
      data: data
    };
    this.changeTabs(changes);
  }


  setUser(data) {
    sessionStorage.setItem('User', JSON.stringify(data));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('User'));
  }

  removeUser() {
    sessionStorage.clear();
  }

  createNewUser(userData) {
    return this.http
      .post(this.baseUrl + 'shared/signup', userData);
  }
  
  userLogin(userData) {
    return this.http
      .post(this.baseUrl + 'shared/userLogin', userData);
  }

  searchFood(data) {
    return this.http
      .post(this.baseUrl + 'shared/filterFood', data);
  }
}
