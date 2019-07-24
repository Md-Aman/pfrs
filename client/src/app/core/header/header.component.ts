import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  isUserExist: boolean = false;
  userData: any;
  data: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    this.subscription = this.userService.currentChanges.subscribe(status => {
      this.data = status;
      console.log("data is :", this.data);
      if (this.data.type === 'login') {
        if (this.data.data === 1) {
          this.isUserExist = true;
        } else {
          this.isUserExist = false;
        }
      }
    })

  }

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
    this.router.navigate(['/search-food']);
  }

}