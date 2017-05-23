import { RoutingDataPage } from './app.po';

describe('routing-data App', () => {
  let page: RoutingDataPage;

  beforeEach(() => {
    page = new RoutingDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
