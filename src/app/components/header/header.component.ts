import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserServiceService, private router: Router, private notificationService: NotificationService)  {  
  }

  currentUser: any;
  logo:string = "assets/imgs/code.png"

  ngOnInit() : void{
    this.getCurrentUser();
  }

  //logout
  public async logout() {
    if (!confirm("are you sure to logout??")) {
      return;
    }
    let { data } = await this.userService.logout();
    if (!data.status) {
        this.notificationService.error("Logout", data.message);
        return;
    }

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  //get current user
  public async getCurrentUser() {
    let { data } = await this.userService.getCurrentUser();
    if (!data.status) {
      this.notificationService.error("getCurrentUser", data.message);
    } else {
      this.currentUser = data.user;
    }
  }
}
