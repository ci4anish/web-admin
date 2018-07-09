import {Injectable} from '@angular/core';
import {UserList} from './mocks/user-list.js';
import {Observable} from 'rxjs/index';
import {of} from 'rxjs';
import {User} from './interfaces';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;

    constructor(private http: HttpClient) {

    }

    // TODO actually fetch user from the server
    public getUser(): Observable<User> {
        if (!this.user) {
            return <Observable<User>>of(UserList[1]).map(user => this.user = user);
            // return this.http.get<User>('URL').map(user => this.user = user);
        } else {
            return of(this.user);
        }
    }
}
