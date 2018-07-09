import { TestBed, inject } from '@angular/core/testing';

import { NotificationsService } from './notifications-service.service';

describe('NotificationsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationsService]
    });
  });

  it('should be created', inject([NotificationsService], (service: NotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
