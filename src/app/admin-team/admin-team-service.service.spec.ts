import { TestBed, inject } from '@angular/core/testing';

import { AdminTeamService } from './admin-team-service.service';

describe('AdminTeamServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTeamService]
    });
  });

  it('should be created', inject([AdminTeamService], (service: AdminTeamService) => {
    expect(service).toBeTruthy();
  }));
});
