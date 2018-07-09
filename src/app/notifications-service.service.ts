import {Injectable} from '@angular/core';
import {Notifications} from './mocks/notifications.js';
import {Observable, Subject} from 'rxjs/index';
import {of} from 'rxjs';
import {Notification, User} from './interfaces';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    notificationChange: Subject = new Subject();

    constructor(private http: HttpClient) {
    }

    // TODO actually fetch user from the server
    public getNotifications(user: User, page: number): Observable<Notification[]> {
        return <Observable<Notification[]>>of(Notifications.filter(notification => {
            return notification.recipient === user.id;
        }).slice(page * 10 - 10, page * 10));
        // return this.http.get<Notification[]>('URL');
    }

    public getUnreadNotificationsCount(): Observable<number> {
        return <Observable<number>>of(Notifications.filter(notification => notification.unread).length);
        // return this.http.get<number>('URL');
    }

    // TODO actually remove user notification the user
    public deleteNotification(id: number): Observable<Notification> {
        const result = Notifications.splice(Notifications.indexOf(Notifications.find(notification => notification.id === id)), 1);
        return <Observable<Notification>>of(result[0]).map(n => { this.notificationChange.next(); return n; });
        // this.http.delete<User>('Notification').map(n => { this.notificationChange.next(); return n; });
    }

    // TODO actually mark as read the server
    public markAsRead(id: number): Observable<Notification> {
        const result = Notifications.find(notification => {
            if (notification.id === id) {
                notification.unread = false;
                return true;
            }
            return false;
        });
        return of(result).map(n => { this.notificationChange.next(); return n; });
        // return this.http.post<User[]>('URL', body, httpOptions).map(n => { this.notificationChange.next(); return n; });
    }
}
