import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {AdminTeamModule} from './admin-team/admin-team.module';
import {AdminInfoModule} from './admin-info/admin-info.module';
import {NotificationsModule} from './notifications/notifications.module';
import {UserService} from './user-service.service';
import {NotificationsService} from './notifications-service.service';
import {AppRoutingModule} from './app-routing.module';
import {AdminPageComponent} from './admin-page.component';

@NgModule({
    declarations: [
        AppComponent,
        AdminPageComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        AdminTeamModule,
        AdminInfoModule,
        MatSidenavModule,
        NotificationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    exports: [],
    providers: [UserService, NotificationsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
