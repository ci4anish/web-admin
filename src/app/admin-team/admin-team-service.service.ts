import {Injectable} from '@angular/core';
import {TeamList} from '../mocks/team-list.js';
import {UserList} from '../mocks/user-list.js';
import {Observable} from 'rxjs/index';
import {of} from 'rxjs';
import {Team, User} from '../interfaces';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdminTeamService {

    constructor(private http: HttpClient) {
    }

    // TODO actually fetch user from the server
    public getTeam(teamId: number): Observable<Team> {
        return <Observable<Team>>of(TeamList.find(team => team.id === teamId));
        // return this.http.get<Team>('URL');
    }

    // TODO actually fetch user from the server
    public getTeamMates(user: User, page: number, filterValue: string): Observable<User[]> {

        let filteredUsers;

        if (!filterValue) {
            filteredUsers = UserList.filter(u => u.teamId === user.teamId && u.id !== user.id);
        } else {
            filteredUsers = UserList.filter(u => {
                let isNameEqualsFilter = true;
                if (filterValue) {
                    isNameEqualsFilter = user.displayName.toUpperCase().indexOf(filterValue.toUpperCase()) !== -1;
                }

                return isNameEqualsFilter && u.teamId === user.teamId && u.id !== user.id;
            });
        }

        return <Observable<User[]>>of(filteredUsers.slice(page * 10 - 10, page * 10));
        // return this.http.get<User[]>('URL');
    }

    // TODO actually fetch user from the server
    public getSuggestedTeamMates(user: User, filterValue: string, pickedUsersIds: number[]): Observable<User[]> {
        const filteredUsers = UserList.filter(u => {
            const isNameEqualsFilter = u.displayName.toUpperCase().indexOf(filterValue.toUpperCase()) !== -1;
            return isNameEqualsFilter && u.teamId !== user.teamId && u.id !== user.id && pickedUsersIds.indexOf(u.id) === -1;
        });

        return <Observable<User[]>>of(filteredUsers.slice());
        // return this.http.get<User[]>('URL');
    }

    // TODO actually remove user from the server
    public removeTeamMate(id: number, _teamId: number): Observable<User> {
        const result = UserList.find(teamMate => {
            if (teamMate.id === id) {
                teamMate.teamId = 3;
                return true;
            }
            return false;
        });
        return <Observable<User>>of(result);
        // this.http.delete<User>('URL');
    }

    // TODO actually add users to the server
    public addTeamMates(user: User, ids: number[]): Observable<User[]> {
        const result: User[] = [];
        UserList.forEach(u => {
            if (ids.indexOf(u.id) !== -1) {
                u.teamId = user.teamId;
                result.push(u);
            }
        });
        return of(result);
        // return this.http.post<User[]>('URL', body, httpOptions)
    }
}
