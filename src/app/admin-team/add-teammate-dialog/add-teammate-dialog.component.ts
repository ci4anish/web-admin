import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import {User} from "../../interfaces";
import {AdminTeamService} from '../admin-team-service.service';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-add-teammate-dialog',
    templateUrl: './add-teammate-dialog.component.html',
    styleUrls: ['./add-teammate-dialog.component.css']
})
export class AddTeammateDialogComponent implements OnInit, OnDestroy {
    searchControl = new FormControl();
    newTeamMates: User[] = [];
    suggestedTeamMates: User[] = [];
    searchControlSub: Subscription;

    constructor(public dialogRef: MatDialogRef<AddTeammateDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private adminTeamService: AdminTeamService) {
    }

    ngOnInit() {
        this.searchControlSub = this.searchControl.valueChanges.subscribe(newValue => {
            let pickedUsersIds = this.newTeamMates.map(user => user.id);
            this.adminTeamService.getSuggestedTeamMates(this.data.user, newValue, pickedUsersIds).subscribe((suggestedTeamMates) => {
                if (newValue) {
                    this.suggestedTeamMates = suggestedTeamMates;
                } else {
                    this.suggestedTeamMates = [];
                }
            })
        });
    }

    ngOnDestroy() {
        this.searchControlSub.unsubscribe();
    }

    addTeamMember(e: MouseEvent, user: User){
        e.stopPropagation();
        this.searchControl.setValue('');
        this.newTeamMates.push(user);

    }

    removeTeamMate(teamMate: User) {
        this.newTeamMates.splice(this.newTeamMates.indexOf(teamMate), 1);
    }

    close(value?: User[]): void {
        this.dialogRef.close(value);
    }
}
