import { Component, OnInit, Input, SimpleChanges, OnChanges, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { AdminTeamService } from './admin-team-service.service';
import { Team, User } from "../interfaces";
import { FormControl } from '@angular/forms';
import { Subscription }  from 'rxjs/index';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent'

@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.css']
})
export class AdminTeamComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() user: User;

  teamMates: User[] = [];
  team: Team;
  teamPageCounter: number = 1;
  filterFormControl = new FormControl();
  filterFormControlSub: Subscription;


  private scrollContainer: Element;

  constructor(private adminTeamService: AdminTeamService, private elementRef: ElementRef) {
    this.scrollWatcher = this.scrollWatcher.bind(this);
  }

  ngOnInit() {
      this.filterFormControlSub = this.filterFormControl.valueChanges
          .debounceTime(1000)
          .subscribe(this.applyFilterSearch.bind(this));
  }

    ngOnChanges(changes: SimpleChanges){
        if(changes.user){
            this.getTeamMates();
            this.getTeam();
        }
    }

    ngAfterViewInit(){
      this.scrollContainer = this.elementRef.nativeElement.querySelector('.team-list');
      this.scrollContainer.addEventListener('scroll', this.scrollWatcher);
    }

    ngOnDestroy(){
        this.scrollContainer.removeEventListener('scrol;', this.scrollWatcher);
        this.filterFormControlSub.unsubscribe()
    }

    removeTeamMate(id: number){
      this.adminTeamService.removeTeamMate(id).subscribe(removed => {
        this.teamMates.splice(this.teamMates.indexOf(removed), 1);
      });
    }

    clearFilter(){
        this.filterFormControl.setValue('');
        this.applyFilterSearch();
    }

    private applyFilterSearch(){
        this.teamPageCounter = 1;
        this.teamMates.splice(0, this.teamMates.length);
        this.getTeamMates();
    }

    private scrollWatcher(){
        if (this.scrollContainer.scrollHeight - this.scrollContainer.scrollTop === this.scrollContainer.clientHeight) {
            this.getTeamMates();
        }
    }

    private getTeamMates(){
        this.adminTeamService.getTeamMates(this.user.teamId, this.teamPageCounter, this.filterFormControl.value).subscribe(teamMates => {
            this.teamMates = this.teamMates.concat(teamMates);
            this.teamPageCounter++;
        });
    }

    private getTeam(){
        this.adminTeamService.getTeam(this.user.teamId).subscribe(team => {
            this.team = team;
        });
    }
}
