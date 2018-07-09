import {Component, OnInit, OnDestroy} from '@angular/core';
import {NotificationsService} from '../notifications-service.service';
import {Notification, User} from '../interfaces';
import {Subscription} from 'rxjs/index';
import {UserService} from '../user-service.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
    public notifications: Notification[];
    private notificationsSub: Subscription;
    private userSub: Subscription;
    private user: User;
    private notificationsPageCounter: number = 1;

    constructor(private notificationsService: NotificationsService, private userService: UserService) {
    }

    ngOnInit() {
        this.userSub = this.userService.getUser().subscribe(user => {
            this.user = user;
            this.notificationsSub = this.notificationsService.getNotifications(this.user, this.notificationsPageCounter)
                .subscribe((notifications) => {
                    this.notifications = notifications;
                });
        });
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    public deleteNotification(e: MouseEvent, id: number) {
        e.stopPropagation();
        this.notificationsService.deleteNotification(id).subscribe(deleted => {
            this.notifications.splice(this.notifications.indexOf(deleted), 1);
        });
    }

    public markAsRead(id: number) {
        this.notificationsService.markAsRead(id).subscribe(read => {
            this.notifications.find(notification => {
                if (notification.id === read.id) {
                    notification.unread = false;
                    return true;
                }
                return false;
            });
        });
    }

}
