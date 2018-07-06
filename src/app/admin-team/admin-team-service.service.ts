import { Injectable } from '@angular/core';
import { TeamList } from '../mocks/team-list.js'
import { UserList } from '../mocks/user-list.js'
import { Observable } from "rxjs/index";
import { of } from 'rxjs';
import { Team, User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AdminTeamService {

  constructor() { }

    //TODO actually fetch user from the server
    public getTeam(teamId: number) : Observable<Team>{
        return <Observable<Team>>of(TeamList.find(team => team.id === teamId));
    }

    //TODO actually fetch user from the server
    public getTeamMates(teamId: number, page: number, filterValue: string) : Observable<User[]>{

        let filteredUsers;

        if(!filterValue){
            filteredUsers = UserList.filter(teamMate => teamMate.teamId === teamId);
        }else{
            filteredUsers = UserList.filter(teamMate => {
                let isNameEqualsFilter = true;
                if(filterValue){
                    isNameEqualsFilter = teamMate.displayName.toUpperCase().indexOf(filterValue.toUpperCase()) !== -1;
                }

                return isNameEqualsFilter && teamMate.teamId === teamId;
            });
        }

        return <Observable<User[]>>of(filteredUsers.slice(page * 10 - 10, page * 10));
    }

    //TODO actually remove user from the server
    public removeTeamMate(id: number) : Observable<User>{
        let result = UserList.splice(UserList.indexOf(UserList.find(teamMate => teamMate.id === id)), 1);
        return <Observable<User>>of(result[0]);
    }

}
