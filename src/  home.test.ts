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

it("Home page should have the correct title", async () => {
    await page.goto("https://github.com");
});