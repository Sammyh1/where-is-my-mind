import { WhereIsItPage } from './app.po';

describe('where-is-it App', () => {
  let page: WhereIsItPage;

  beforeEach(() => {
    page = new WhereIsItPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
