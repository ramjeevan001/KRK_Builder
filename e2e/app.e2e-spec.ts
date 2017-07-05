import { KrkBuilderAppPage } from './app.po';

describe('krk-builder-app App', () => {
  let page: KrkBuilderAppPage;

  beforeEach(() => {
    page = new KrkBuilderAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
