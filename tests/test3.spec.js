import {test,expect, chromium} from '@playwright/test'

async function f1(){

    const chrome= await chromium.launch({headless: false});

    const browser=await chrome.newContext(); //browser
    const page = await browser.newPage();    //page or tab
    await page.goto("https://www.facebook.com"); //opens site
    const page1 =await browser.newPage()
    await page1.goto("https://www.gmail.com");
   
   
    const browser1=await chrome.newContext();
    const page2 = await browser1.newPage();
    await page2.goto("https://www.amazon.com");
    const page3 =await browser1.newPage()
    await page3.goto("https://www.flipkart.com");   
    
}

test("test4",f1)