import { Injectable } from '@angular/core';
import { MyAxiosService } from './my-axios.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  axiousInstance;
  constructor(private auxiosService: MyAxiosService) {
    this.axiousInstance = auxiosService.getAxiousInstance();
  }

  //login
  public login(username: string, password: string) {
    return this.axiousInstance.get('assets/mock/user.json', {
      data: {
        userName: username,
        password: password
      }
    });
  }

  //logout
  public logout() {
    return this.axiousInstance.get('assets/mock/logout.json')
  }

  //get current user
  public getCurrentUser() {
    return this.axiousInstance.get('assets/mock/currentUser.json')
  }

  //gets user list by page
  public getUsersByPage(pageIndex: number, pageSize: number, user: any) {
    return this.axiousInstance.get('assets/mock/getsUsersbyPage.json')
  }

}
