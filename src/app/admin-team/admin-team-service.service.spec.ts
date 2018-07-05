import { TestBed, inject } from '@angular/core/testing';

import { AdminTeamServiceService } from './admin-team-service.service';

describe('AdminTeamServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTeamServiceService]
    });
  });

  it('should be created', inject([AdminTeamServiceService], (service: AdminTeamServiceService) => {
    expect(service).toBeTruthy();
  }));
});
