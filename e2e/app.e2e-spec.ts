import { TeamcityMonitorPage } from './app.po';

describe('teamcity-monitor App', function() {
  let page: TeamcityMonitorPage;

  beforeEach(() => {
    page = new TeamcityMonitorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
