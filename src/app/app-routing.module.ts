import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from './admin-page.component';
import {NotificationDetailComponent} from './notifications/notification-detail/notification-detail.component';

const routes: Routes = [
    {path: '', redirectTo: '/admin', pathMatch: 'full'},
    {path: 'admin', component: AdminPageComponent},
    {path: 'notification/:id', component: NotificationDetailComponent, runGuardsAndResolvers: 'paramsChange'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
