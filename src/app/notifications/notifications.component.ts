import {Component, OnInit, OnDestroy, AfterViewInit, ElementRef} from '@angular/core';
import {NotificationsService} from '../notifications-service.service';
import {Notification, User} from '../interfaces';
import {Subscription} from 'rxjs/index';
import {UserService} from '../user-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy, AfterViewInit {
    public notifications: Notification[] = [];
    private userSub: Subscription;
    private user: User;
    private notificationsPageCounter: number = 1;
    private scrollContainer: Element;

    constructor(private notificationsService: NotificationsService, private userService: UserService,
                private elementRef: ElementRef, private router: Router) {
        this.scrollWatcher = this.scrollWatcher.bind(this);
        this.router.routeReuseStrategy.shouldReuseRoute = function(){
            return false;
        }
    }

    ngOnInit() {
        this.userSub = this.userService.getUser().subscribe(user => {
            this.user = user;
            this.getNotifications();
        });
    }

    ngAfterViewInit() {
        this.scrollContainer = this.elementRef.nativeElement.querySelector('.scroller-wrapper');
        this.scrollContainer.addEventListener('scroll', this.scrollWatcher);
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

    private scrollWatcher() {
        if (this.scrollContainer.scrollHeight - this.scrollContainer.scrollTop === this.scrollContainer.clientHeight) {
            console.log('getNotifications');
            this.getNotifications();
        }
    }

    private getNotifications() {
        this.notificationsService.getNotifications(this.user, this.notificationsPageCounter)
            .subscribe((notifications) => {
                this.notifications = this.notifications.concat(notifications);
                this.notificationsPageCounter++;
            });
    }

}
