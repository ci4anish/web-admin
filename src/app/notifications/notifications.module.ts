import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {NotificationsService} from '../notifications-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NotificationDetailComponent} from './notification-detail/notification-detail.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [NotificationsComponent, NotificationDetailComponent],
    exports: [NotificationsComponent],
    providers: [NotificationsService]
})
export class NotificationsModule {
}
