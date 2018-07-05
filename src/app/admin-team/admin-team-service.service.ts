import { Injectable } from '@angular/core';
import { TeamList } from '../mocks/team-list.js'
import { Observable } from "rxjs/index";
import { of } from 'rxjs';
import { TeamMate } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AdminTeamService {

  constructor() { }

    //TODO actually fetch user from the server
    public getTeamMates(userId: number, page: number, filterValue: string) : Observable<TeamMate[]>{

        let searchArr;

        if(!filterValue){
            searchArr = TeamList.slice();
        }else{
            searchArr = TeamList.filter(teamMate => teamMate.name.toUpperCase().indexOf(filterValue.toUpperCase()) !== -1);
        }

        return <Observable<TeamMate[]>>of(searchArr.slice(page * 10 - 10, page * 10));
    }

    //TODO actually remove user from the server
    public removeTeamMate(id: number) : Observable<TeamMate>{
        let result = TeamList.splice(TeamList.indexOf(TeamList.find(teamMate => teamMate.id === id)), 1);
        return <Observable<TeamMate>>of(result[0]);
    }

}
