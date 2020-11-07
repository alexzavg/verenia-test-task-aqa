import { browser, by, element, $, $$ } from 'protractor';

let config = require('../../e2e/protractor.conf.js');
let EC = browser.ExpectedConditions;

export class AppPage {
  navigateTo(url: string): Promise<unknown> {
    console.log(url);
    return browser.get(url) as Promise<unknown>;
  }

  headerMenuSection(text: string) {
    return element(by.cssContainingText('nav a', text));
  }

  searchFiltersBlock() {
    return $('app-repositories-filters');
  }

  searchField() {
    return $('[formcontrolname="searchQuery"]');
  }

  repoListItems() {
    return $$('.repo-list .repo-list__item');
  };

  repoListSpecificItem(index:number) {
    return $$('.repo-list .repo-list__item').get(index);
  };

  repoListNameSpecificBlock(text:string) {
    return element(by.cssContainingText('.repo-list .repo-list__name', text));
  };

  repoListNameSpecificItem(index:number) {
    return $$('.repo-list .repo-list__name').get(index);
  };

  countElements(element: any){
    return element.count();
  }

  repoListItemFirst() {
    return $$('.repo-list__item').first();
  };


  languageDropdown() {
    return $('[formcontrolname="language"]');
  }

  languageOption(text: string) {
    return element(by.cssContainingText('mat-option', text));
  }

  searchResultBlock(text: string) {
    return element(by.cssContainingText('.repo-list__item', text));
  }

  searchBlockBtn(text: string, btnText: string) {
    return this.searchResultBlock(text).element(by.cssContainingText('.app-btn', btnText));
  }

  // -------------- common functions --------------
  /**
   * Gets text from element
   *
   */
  getElementText(element:any): Promise<unknown>{
    return element.getText() as Promise<unknown>;
  };

  /**
   * Fills text field in browser prompt alert and accept it
   *
   */
  fillPromptWithText(text: string) {
    console.log('Text for prompt', text);
    browser.sleep(1000); //sometimes doesn't switch to alert in time
    browser.switchTo().alert().then(async (alert) => {
      browser.sleep(250); //sometimes doesnt fill the field
      await alert.sendKeys(text);
      browser.sleep(250); //sometimes it is filling field too fast
      await alert.accept();
      await browser.switchTo().defaultContent();
    });
  };

  /**
   * Wait until currentUrl contains url
   *
   */
  waitForUrl(url: string) {
    console.log(`Waiting for URL ${url}`);
    browser.driver.wait(EC.urlContains(url));
  };

  /**
   * Wait until selected element will be visible
   *
   * @param element
   * @param timeout
   */
  waitUntilElementVisible(element: any, timeout=config.config.allScriptsTimeout) {
    return browser.driver.wait(EC.visibilityOf(element), timeout);
  };

  /**
   * Fill element with text
   * @param element
   * @param text
   */
  fillElementWithText(element:any, text:string) {
    this.waitUntilElementVisible(element);
    element.clear();
    element.sendKeys(text);
  };

  /**
   * Wait for element and click it
   *
   * @param element
   */
  waitAndClickElement(element:any) {
    browser.driver.wait(EC.visibilityOf(element));
    browser.driver.wait(EC.elementToBeClickable(element));
    element.click();
  };

  /**
   * Wait until selected element will be present
   *
   * @param element
   * @param {ProtractorBrowser} browser
   */
  waitUntilElementPresent(element) {
    return browser.driver.wait(EC.presenceOf(element), config.config.allScriptsTimeout);
  };

  /**
   * Wait until selected element will not be present in page DOM
   *
   * @param element
   * @param timeout
   */
  waitUntilElementIsNotPresent(element:any, timeout=config.config.allScriptsTimeout) {
    return browser.driver.wait(EC.stalenessOf(element), timeout);
  };

  waitForPendingRequests() {
    let zeroCounter = browser.$('[name*="calls-counter"][content="0"]');
    let loader = browser.$('[class*="body-loader"]');
    let isLoaderPresent;

    function activeRequests() {
      return browser.$('[name*="calls-counter"]').getAttribute('data-requests');
    }
    browser.sleep(100);
    loader.isPresent().then(isPresent => (isLoaderPresent = isPresent));
    browser
      .$('[name*="calls-counter"]')
      .isPresent()
      .then(result => {
        if (result && !isLoaderPresent) {
          this.waitUntilElementPresent(zeroCounter).catch(() => {
            return activeRequests().then(result => {
              return Promise.reject(`There were pending requests in browser: ${result}`);
            });
          });
        }
      });
  };
}
