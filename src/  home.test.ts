import { chromium, Browser, Page } from "playwright";

let browser: Browser;
beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});

let page: Page;
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

it("TestCases", async () => {
    await page.goto("https://github.com");
    await page.click('body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > div.position-relative.mr-3.d-inline-block > a');
    await page.fill('[name="login"]', "nicolas.grossi@gmail.com");
    await page.fill('[name="password"]', "nico140778NCG");
    await page.click('text=New');
    await page.click('xpath=//*[@id="repository_name"]');
  });
    