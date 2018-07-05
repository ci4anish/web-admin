import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service.service';
import { User } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    showNotifications: boolean;
    user: User;

    constructor(private userService: UserService){}

    ngOnInit() {
        this.userService.getUser().subscribe(user => {
            this.user = user;
        });
    }
}
