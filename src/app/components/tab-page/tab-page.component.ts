import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { NotificationService } from 'src/app/services/notification-service';
import { MyRouteReuseStrategy } from 'src/app/modules/MyRouteReuseStrategy'


@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css']
})
export class TabPageComponent {
  //tabs array
  tabs: any = [];
  //selected index
  selectedIndex = 0;
  //constructor
  constructor(private router: Router, private titleService: Title, private activedRoute: ActivatedRoute, private notificationService: NotificationService) {
    //listener for router - > activationend
    this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe((e: any) => {
      const snapshot: any = e.snapshot;
      let url = snapshot['_routerState'].url;
      const isSkip: boolean = !(url != null && snapshot.routeConfig.data != null && snapshot.routeConfig.data.useCache != null);
      if (isSkip) {
        return;
      }

      const uid = snapshot.routeConfig.data.uid;
      const name = snapshot.routeConfig.data.name;
      const path = snapshot.routeConfig.path;

      let exist: boolean = false;
      let index: number = -1;

      for (let i = 0; i < this.tabs.length; i++) {
        let ele = this.tabs[i];
        if (ele.uid == uid) {
          exist = true;
          index = i;
          break;
        }
      }

      if (!exist) {
        let tabItem = { uid: uid, name: name, path: path, url: url }
        this.tabs.push(tabItem);
        index = this.tabs.indexOf(tabItem);
      }
      this.selectedIndex = index;
    }
    );
  }

  //close tab
  public closeTab({ index }: { index: number }): void {
    //let currentMenuItem = this.tabs[index];
    //let handlers: any = MyRouteReuseStrategy.handlers;
    //delete handlers[currentMenuItem.path];
    if (index == 0 && this.tabs.length >= 0) {
      let eleOne = this.tabs[1];
      this.tabs[0] = eleOne;
      if (this.tabs.length == 1) {
        this.tabs.splice(0);
      } else {
        this.tabs.splice(1);
      }

    } else {
      this.tabs.splice(index);
    }
    if (index == 0 || this.tabs.length == 0) {
      this.router.navigate(['/main']);
    }
  }

  //new tab
  public newTab(): void {
    this.tabs("123")
    this.selectedIndex = this.tabs.length;
  }

  //tab selected
  public tabSelected(tab: any, index: number) {
    this.selectedIndex = index;
    this.router.navigate([tab.url]);
  }

}
