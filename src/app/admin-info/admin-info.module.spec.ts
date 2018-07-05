import { AdminInfoModule } from './admin-info.module';

describe('AdminInfoModule', () => {
  let adminInfoModule: AdminInfoModule;

  beforeEach(() => {
    adminInfoModule = new AdminInfoModule();
  });

  it('should create an instance', () => {
    expect(adminInfoModule).toBeTruthy();
  });
});
