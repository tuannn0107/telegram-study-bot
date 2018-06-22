import { ChannelManagementModule } from './channel-management.module';

describe('ChannelManagementModule', () => {
  let channelManagementModule: ChannelManagementModule;

  beforeEach(() => {
    channelManagementModule = new ChannelManagementModule();
  });

  it('should create an instance', () => {
    expect(channelManagementModule).toBeTruthy();
  });
});
