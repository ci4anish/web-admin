import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

    userInfoForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    get f() {
        return this.userInfoForm.controls;
    }

    ngOnInit() {
        this.userInfoForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]]
        });
    }

    saveInfo(){
        if (this.userInfoForm.invalid) {
            return;
        }
        console.log('saveInfo', this.userInfoForm.value);
    }
}
