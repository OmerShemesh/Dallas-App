import { DallasAppPage } from './app.po';

describe('dallas-app App', () => {
  let page: DallasAppPage;

  beforeEach(() => {
    page = new DallasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
