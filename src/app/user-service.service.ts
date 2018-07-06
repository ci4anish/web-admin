import { Injectable } from '@angular/core';
import { UserList } from './mocks/user-list.js'
import { Observable } from "rxjs/index";
import { of } from 'rxjs';
import { User } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {

  }

  //TODO actually fetch user from the server
  public getUser() : Observable<User>{
    return <Observable<User>>of(UserList[1]);
  }

  public getUsers(){
    return UserList;
  }
}
