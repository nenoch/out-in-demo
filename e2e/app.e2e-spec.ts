import { OutInDemoPage } from './app.po';

describe('out-in-demo App', () => {
  let page: OutInDemoPage;

  beforeEach(() => {
    page = new OutInDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
