import { browser, by, element } from 'protractor';
import 'tslib';

describe('Home', () => {

  beforeEach(async () => {
    /**
     * Change hash depending on router LocationStrategy.
     */
    await browser.get('/');
    await element(by.linkText('Home')).click();
  });

  it('should have a title', async () => {
    const subject = await browser.getTitle();
    const result  = 'Angular website';
    expect(subject).toEqual(result);
  });

});
