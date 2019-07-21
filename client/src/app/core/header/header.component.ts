import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserExist: boolean = false;
  userData: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    console.log("users :", this.userService.getUser());
    if (this.userService.getUser() !== null) {
      this.userData = this.userService.getUser();
      this.isUserExist = true;
    }
  }

  signIn() {
    this.router.navigate(['/login']);
  }

  signOut() {
    this.isUserExist = false;
    this.userService.removeUser();
    this.toastrService.info("Sign out successful", 'Warning:', { enableHtml: true });
  }

}