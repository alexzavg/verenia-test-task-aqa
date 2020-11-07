import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import * as appData from './app.data.js';

describe('Test Task - Oleksandr Zavhorodnii ;)', () => {

  let page: AppPage;
  let arr = [];

  const urls = appData.urls;
  const searchQueries = appData.searchQueries;
  const languages = appData.languages;
  const btnText = appData.btnText;
  const navbarLinks = appData.navbarLinks;
  const password = appData.password;

  beforeEach(() => {
    page = new AppPage();
    page.waitForPendingRequests();
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    console.log(logs);
  });

  it(`should navigate to URL - ${urls.baseUrl}`, async () => {
    await page.navigateTo(urls.baseUrl);
    await page.waitForUrl(urls.baseUrl);
  });

  it(`should search for text [${searchQueries.test}]`, async () => {
    await page.fillElementWithText(page.searchField(), searchQueries.test);
    await page.waitUntilElementVisible(page.repoListItemFirst());
  });

  it(`should select language [${languages.js}]`, async () => {
    await page.waitAndClickElement(page.languageDropdown());
    await page.waitAndClickElement(page.languageOption(languages.js));
  });

  it(`should collect all repo names from query results`, async () => {
    await page.waitUntilElementVisible(page.repoListItemFirst());

    let items = await page.countElements(page.repoListItems());
    console.log('Number of repos in the search results - ', items);
    let i = 0;
    do {
      await page.waitUntilElementVisible(page.repoListNameSpecificItem(i));
      await page.getElementText(page.repoListNameSpecificItem(i)).then(async (result) => {
        await arr.push(result);
      });
      i++;
    } while (i < items);
    console.log('Names of repos in the search results', arr);
  });

  it(`should check that each repo contains search query [${searchQueries.test}]`, async () => {
    let i = 0;
    do {
      await page.getElementText(page.repoListSpecificItem(i)).then(async (result) => {
        let lowerCaseResult = result.toString().toLowerCase()
        await expect(lowerCaseResult).toContain(searchQueries.test);
        console.log(`Search result repo [${arr[i]}] contains search query text [${searchQueries.test}]`);
        i++;
      });
    } while (i < arr.length);
  });

  it(`should click button [${btnText.addToFav}] for each repo in search results`, async () => {
    let i = 0;
    do {
      await page.waitAndClickElement(page.searchBlockBtn(arr[i], btnText.addToFav));
      await page.waitUntilElementVisible(page.searchBlockBtn(arr[i], btnText.removeFromFav));
      i++;
    } while (i < arr.length);
  });

  it(`should click [${navbarLinks.favorites}] link in the header navigation bar`, async () => {
    await page.waitAndClickElement(page.headerMenuSection(navbarLinks.favorites));
  });

  it(`should enter password and accept browser prompt`, async () => {
    await page.fillPromptWithText(password); //TODO WORKS BUT GIVES [Unexpected Alert open] ERROR, f-ing disappointed!
  });

  it(`should click button [${btnText.removeFromFav}] for each repo`, async () => {
    await page.waitUntilElementVisible(page.repoListItemFirst());
    let i = 0;
    do {
      await page.waitAndClickElement(page.searchBlockBtn(arr[i], btnText.removeFromFav));
      await page.waitUntilElementIsNotPresent(page.repoListNameSpecificBlock(arr[i]));
      i++;
    } while (i < arr.length);
  });

  it(`should click [${navbarLinks.home}] link in the header navigation bar`, async () => {
    await page.waitAndClickElement(page.headerMenuSection(navbarLinks.home));
    await page.waitUntilElementVisible(page.searchFiltersBlock());
  });

});
