import { test, expect,chromium, firefox, webkit } from '@playwright/test';

async function f1() {
    const chrome =await webkit.launch({headless:false});

    const browser =await chrome.newContext(); //a browser
    const page1 =await browser.newPage(); //new page
    await page1.goto("https://www.google.com");
    const page2 = await browser.newPage();
    await page2.goto("https://www.facebook.com");

    
    const browser2 =await chrome.newContext(); //a browser
    const b2page1 =await browser2.newPage(); //new page
    await b2page1.goto("https://www.techelliptica.com");
    const b2page2 = await browser2.newPage();
    await b2page2.goto("https://www.linkedin.com"); 
    
}

test("testcase1 - demo", f1)

//npx playwright test test.spec.js