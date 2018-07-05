import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInfoComponent } from './admin-info.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
      CommonModule,
      MatInputModule,
      MatFormFieldModule,
      MatExpansionModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule
  ],
  exports: [AdminInfoComponent],
  declarations: [AdminInfoComponent]
})
export class AdminInfoModule { }
