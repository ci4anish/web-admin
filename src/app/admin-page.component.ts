import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  template: `
      <div class="admin-content">
          <div class="admin-info">
              <app-admin-info></app-admin-info>
          </div>
          <app-admin-team></app-admin-team>
      </div>
  `
})
export class AdminPageComponent {}
