import { BotManagementModule } from './bot-management.module';

describe('BotManagementModule', () => {
  let botManagementModule: BotManagementModule;

  beforeEach(() => {
    botManagementModule = new BotManagementModule();
  });

  it('should create an instance', () => {
    expect(botManagementModule).toBeTruthy();
  });
});
