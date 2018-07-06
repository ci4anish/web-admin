import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminTeamComponent} from './admin-team.component';
import {AdminTeamService} from './admin-team-service.service';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {AddTeammateDialogComponent} from './add-teammate-dialog/add-teammate-dialog.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatChipsModule
    ],
    exports: [AdminTeamComponent],
    entryComponents: [AddTeammateDialogComponent],
    providers: [AdminTeamService],
    declarations: [AdminTeamComponent, AddTeammateDialogComponent]
})
export class AdminTeamModule {
}
