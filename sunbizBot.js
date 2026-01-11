//This file receives data from the server (index.js), and uses it to fill out the SunBiz form.
import puppeteer from "puppeteer";

export async function fillSunBizForm(data) {
    console.log("Data has been received: " + data);

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100
    });
    const page = await browser.newPage();

    if(data.business.type === "LLC") {
        //Navigate page to the URL - https://efile.sunbiz.org/llc_file.html
        await page.goto('https://efile.sunbiz.org/llc_file.html');

        //Check the disclaimer textbox, and click on 'start new filing'
        await page.click('#disclaimer_read');
        await page.click('input[value="Start New Filing"]');


        //Take a screenshot of the result, and store it in the
    }

    console.log("The Bot seems to have worked!");
}