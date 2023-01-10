import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification-service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-appuser',
  templateUrl: './appuser.component.html',
  styleUrls: ['./appuser.component.css']
})
export class AppuserComponent implements OnInit {

  page: any;
  users: any;
  currentPage: number = 1;
  pageSize: number = 10;
  pageCount: number = 0;

  //user for query  
  userForQuery = {
    name: null,
    category: null,
    firstName: null,
    lastName: null,
    mail: null,
    status: null
  };

  // user for edit 
  userForEdit = {
    name: null,
    category: null,
    firstName: null,
    lastName: null,
    mail: null,
    status: null
  };

  //use for add new
  userForAddNew = {
    name: null,
    category: null,
    firstName: null,
    lastName: null,
    mail: null,
    status: null
  };

  //user grops for edit
  userGroup4Edit = [
    { name: "usergroup1", description: "..." },
    { name: "usergroup2", description: "..." }
  ]

  //user group for add new user
  userGroup4AddNewUser: any = [];

  //show edit user
  showEditUser: boolean = false;

  //show add new dialog
  showAddNew: boolean = false;


  constructor(private userService: UserServiceService, private notificationService: NotificationService) {
    console.log("")
  }

  ngOnInit(): void {
    this.getUsersByPage(this.currentPage, this.pageSize, this.userForQuery);
  }

  public pageChange(pageIndex: number) {
    this.getUsersByPage(pageIndex, this.pageSize, this.userForQuery);
  }

  //query
  public query() {
    this.getUsersByPage(1, this.pageSize, this.userForQuery);
  }

  //on edit
  public onEdit(user: any) {
    this.showEditUser = true;
    this.userForEdit = user;
  }

  //on add new
  public onAddNew() {
    this.showAddNew = true;
  }

  //on edit group
  public onEditGroup(group: any) {
    console.log("On editting...");
  }

  //gets users by page
  public async getUsersByPage(pageIndex: number, pageSize: number, user: any) {
    const { data } = await this.userService.getUsersByPage(pageIndex, pageSize, user);
    if (!data.status) {
      this.notificationService.error("getUsersByPage", data.message);
      return;
    }
    this.page = data.page;
    this.currentPage = data.page.pageIndex;
    this.pageSize = data.page.pageSize;
    this.pageCount = data.page.pageCount;
    this.users = data.page.users;
  }

}
