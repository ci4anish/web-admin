import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from './user-service.service';
import {User} from './interfaces';
import {NotificationsService} from './notifications-service.service';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    showNotifications: boolean;
    user: User;
    notificationsLength: number;
    notificationChangeSub: Subscription;

    constructor(private notificationsService: NotificationsService, private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUser().subscribe(user => {
            this.user = user;
        });
        this.checkUnreadNotifications();
        this.notificationChangeSub = this.notificationsService.notificationChange.subscribe(() => this.checkUnreadNotifications());
    }

    ngOnDestroy() {
        this.notificationChangeSub.unsubscribe();
    }

    private checkUnreadNotifications() {
        this.notificationsService.getUnreadNotificationsCount().subscribe(count => {
            this.notificationsLength = count ? count : 0;
        });
    }
}
