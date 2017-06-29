import { MySportifyAppPage } from './app.po';

describe('my-sportify-app App', () => {
  let page: MySportifyAppPage;

  beforeEach(() => {
    page = new MySportifyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
