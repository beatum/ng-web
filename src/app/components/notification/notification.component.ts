import { Component } from '@angular/core';
import { NotificationService } from "../../services/notification-service";
import { Notification, NotificationType } from "../../model/notification";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notifications: Notification[] = [];
  _subscription: Subscription;

  constructor(private _notificationSvc: NotificationService) {
    this._subscription = new Subscription();
  }

  private _addNotification(notification: Notification) {
    this.notifications.push(notification);

    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);

    }
  }

  ngOnInit() {
    this._subscription = this._notificationSvc.getObservable().subscribe(notification => this._addNotification(notification));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  close(notification: Notification) {
    this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
  }

  public className(notification: Notification): string {
    let style: string;
    switch (notification.type) {
      case NotificationType.success:
        style = 'success';
        break;
      case NotificationType.warning:
        style = 'warning';
        break;
      case NotificationType.error:
        style = 'danger';
        break;
      default:
        style = 'info';
        break;
    }
    return style;
  }
}
