import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {NotificationsService} from '../notifications-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule
    ],
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent],
    providers: [NotificationsService]
})
export class NotificationsModule {
}
