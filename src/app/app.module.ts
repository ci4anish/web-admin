import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';

import { AdminTeamModule } from "./admin-team/admin-team.module";
import { AdminInfoModule } from "./admin-info/admin-info.module";
import { UserService } from "./user-service.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatIconModule,
      AdminTeamModule,
      AdminInfoModule,
      MatSidenavModule
  ],
  exports: [],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
