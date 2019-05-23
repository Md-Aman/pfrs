import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isUserExist: boolean = false;
  userData: any ;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log("users :", this.userService.getUser());
    if(this.userService.getUser() !== null){
      this.userData = this.userService.getUser();
      this.isUserExist = true;
    }
  }

  signIn(){
    this.router.navigate(['/login']);
  }

  signOut(){
    console.log("data :")
    this.isUserExist = false;
    this.userService.removeUser();
  }

}
