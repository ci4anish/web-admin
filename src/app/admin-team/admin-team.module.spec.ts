import { AdminTeamModule } from './admin-team.module';

describe('AdminTeamModule', () => {
  let adminTeamModule: AdminTeamModule;

  beforeEach(() => {
    adminTeamModule = new AdminTeamModule();
  });

  it('should create an instance', () => {
    expect(adminTeamModule).toBeTruthy();
  });
});
