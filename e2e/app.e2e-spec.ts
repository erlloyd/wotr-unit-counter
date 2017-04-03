import { WotrUnitCounterPage } from './app.po';

describe('wotr-unit-counter App', () => {
  let page: WotrUnitCounterPage;

  beforeEach(() => {
    page = new WotrUnitCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
