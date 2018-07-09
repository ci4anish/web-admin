import {Component, OnInit, Input} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../interfaces';
import {UserService} from '../user-service.service';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-admin-info',
    templateUrl: './admin-info.component.html',
    styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

    @Input() user: User;

    userInfoForm: FormGroup;
    private userSub: Subscription;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.userInfoForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]]
        });
    }

    get f() {
        return this.userInfoForm.controls;
    }

    ngOnInit() {
        this.userSub = this.userService.getUser().subscribe(user => {
            this.user = user;
            this.userInfoForm.setValue({
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email,
                phone: this.user.phone
            });
        });
    }

    // TODO save info to backend
    saveInfo() {
        if (this.userInfoForm.invalid) {
            return;
        }
        console.log('saveInfo', this.userInfoForm.value);
    }
}
