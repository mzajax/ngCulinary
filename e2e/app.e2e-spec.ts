import { NgCulinaryPage } from './app.po';

describe('ng-culinary App', () => {
  let page: NgCulinaryPage;

  beforeEach(() => {
    page = new NgCulinaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
