import {Component, OnInit, AfterViewInit, ElementRef, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AdminTeamService} from './admin-team-service.service';
import {UserService} from '../user-service.service';
import {AddTeammateDialogComponent} from './add-teammate-dialog/add-teammate-dialog.component';
import {Team, User} from '../interfaces';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs/index';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'app-admin-team',
    templateUrl: './admin-team.component.html',
    styleUrls: ['./admin-team.component.css']
})
export class AdminTeamComponent implements OnInit, AfterViewInit, OnDestroy {
    user: User;
    teamMates: User[] = [];
    team: Team;
    filterFormControl = new FormControl();
    private teamPageCounter: number = 1;
    private filterFormControlSub: Subscription;
    private userSub: Subscription;


    private scrollContainer: Element;

    constructor(private adminTeamService: AdminTeamService, private userService: UserService,
                private elementRef: ElementRef, public dialog: MatDialog) {
        this.scrollWatcher = this.scrollWatcher.bind(this);
    }

    ngOnInit() {
        this.filterFormControlSub = this.filterFormControl.valueChanges
            .debounceTime(1000)
            .subscribe(this.applyFilterSearch.bind(this));
        this.userSub = this.userService.getUser().subscribe(user => {
            this.user = user;
            this.getTeamMates();
            this.getTeam();
        });
    }

    ngAfterViewInit() {
        this.scrollContainer = this.elementRef.nativeElement.querySelector('.team-list');
        this.scrollContainer.addEventListener('scroll', this.scrollWatcher);
    }

    ngOnDestroy() {
        this.scrollContainer.removeEventListener('scroll', this.scrollWatcher);
        this.filterFormControlSub.unsubscribe();
        this.userSub.unsubscribe();
    }

    removeTeamMate(id: number) {
        this.adminTeamService.removeTeamMate(id, this.user.teamId).subscribe(removed => {
            this.teamMates.splice(this.teamMates.indexOf(removed), 1);
        });
    }

    clearFilter() {
        this.filterFormControl.setValue('');
        this.applyFilterSearch();
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddTeammateDialogComponent, <any>{
            width: '500px',
            data: {user: this.user}
        });

        dialogRef.afterClosed().subscribe(teamMatesToAdd => {
            if (teamMatesToAdd && teamMatesToAdd.length > 0) {
                this.adminTeamService.addTeamMates(this.user, teamMatesToAdd.map(user => user.id)).subscribe(addedUsers => {
                    this.clearFilter();
                });
            }
        });
    }

    private applyFilterSearch() {
        this.teamPageCounter = 1;
        this.teamMates.splice(0, this.teamMates.length);
        this.getTeamMates();
    }

    private scrollWatcher() {
        if (this.scrollContainer.scrollHeight - this.scrollContainer.scrollTop === this.scrollContainer.clientHeight) {
            this.getTeamMates();
        }
    }

    private getTeamMates() {
        this.adminTeamService.getTeamMates(this.user, this.teamPageCounter, this.filterFormControl.value).subscribe(teamMates => {
            this.teamMates = this.teamMates.concat(teamMates);
            this.teamPageCounter++;
        });
    }

    private getTeam() {
        this.adminTeamService.getTeam(this.user.teamId).subscribe(team => {
            this.team = team;
        });
    }
}
