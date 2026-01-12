import { test,expect,chromium,firefox,webkit } from '@playwright/test';

/*async function f1(){
    const chrome= await webkit.launch ({headless:false});
    const browser =await chrome.newContext();
    const page1= await browser.newPage();
    await page1.goto("https://www.google.com")
    const page2=await browser.newPage();
    await page2.goto ("https://www.facebook.com")

}

test("testcase2 - demo",f1) */

test("testcase1 - demo", async({page}) =>{
    await page.goto("https://www.gmail.com")
});

test("testcase3 -demo ", async({page}) => {
  await page.goto("https://www.amazon.com")
});