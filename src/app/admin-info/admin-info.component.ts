import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../interfaces';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit, OnChanges {

    @Input() user: User;

    userInfoForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
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
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes.user){
            this.userInfoForm.setValue({
                firstName:    this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email,
                phone: this.user.phone
            });
        }
    }

    //TODO save info to backend
    saveInfo(){
        if (this.userInfoForm.invalid) {
            return;
        }
        console.log('saveInfo', this.userInfoForm.value);
    }
}
