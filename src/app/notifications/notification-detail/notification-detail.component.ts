import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Notification} from '../../interfaces';
import {NotificationsService} from '../../notifications-service.service';

@Component({
    selector: 'app-notification-detail',
    templateUrl: './notification-detail.component.html',
    styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

    notification: Notification;

    constructor(private route: ActivatedRoute,
                private notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.getNotificationDetails();
    }

    private getNotificationDetails() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.notificationsService.getNotificationDetails(id).subscribe(notification => this.notification = notification);
    }
}
