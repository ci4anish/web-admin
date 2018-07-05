import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTeamComponent } from './admin-team.component';
import { AdminTeamService } from './admin-team-service.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
      CommonModule,
      MatListModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      MatButtonModule,
      ReactiveFormsModule
  ],
  exports: [AdminTeamComponent],
  providers: [AdminTeamService],
  declarations: [AdminTeamComponent]
})
export class AdminTeamModule { }
