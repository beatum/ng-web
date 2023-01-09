import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu-service.service';
import { NotificationService } from 'src/app/services/notification-service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menuItems: any;
  constructor(private menuService: MenuServiceService, private notificaationService: NotificationService) {
  }


  ngOnInit(): void {
    this.getMenuItems();
  }

  //gets menu items
  private async getMenuItems() {
    let { data } = await this.menuService.getMenuItems();
    if (!data.status) {
      this.notificaationService.error("getMenuItems", data.message);
      return;
    }
    this.menuItems = data.menus;
  }

}
