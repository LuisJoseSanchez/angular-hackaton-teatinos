import { AngularHackatonTeatinosPage } from './app.po';

describe('angular-hackaton-teatinos App', () => {
  let page: AngularHackatonTeatinosPage;

  beforeEach(() => {
    page = new AngularHackatonTeatinosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
