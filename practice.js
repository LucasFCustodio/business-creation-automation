import puppeteer from "puppeteer";

const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100
    });

const page = await browser.newPage();

await page.goto('https://the-internet.herokuapp.com/checkboxes')

await page.click('#checkboxes input:nth-of-type(2)');
await page.click('#checkboxes input:nth-of-type(1)');