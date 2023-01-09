import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserServiceService, private router: Router, private notificationService: NotificationService) {
    this.point();
  }

  userName: string = "";
  password: string = "";
  rememberMe: boolean = false;

  alertMessage: string = "";
  alertClosed: boolean = true;

  //user infor validation
  private userInfoValidation() {
    //user name
    if (this.userName.trim() == "") {
      this.alertClosed = false;
      this.alertMessage = "Enter your user name!!";
      return false;
    } else {
      this.alertClosed = true;
      this.alertMessage = "";
    }
    //password
    if (this.password.trim() == "") {
      this.alertClosed = false;
      this.alertMessage = "Enter your password!!";
      return false;
    } else {
      this.alertClosed = true;
      this.alertMessage = "";
    }
    return true;
  }
  
  //login 
  public async login() {
    if (!this.userInfoValidation()) {
      return;
    }
    let { data } = await this.userService.login(this.userName, this.password);
    if (!data.status) {
      this.notificationService.error("Login", data.message);
    } else {
      localStorage.setItem("user", data.user);
      localStorage.setItem("token", data.token);
      this.router.navigate(['/main']);
    }
  }

  //point
  private point() {
    let user = localStorage.getItem("user");
    let token = localStorage.getItem("token");
    if (null != user && null != token) {
      this.router.navigate(['/main']);
    }
  }

}
