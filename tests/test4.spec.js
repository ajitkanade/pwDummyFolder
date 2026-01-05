
import{test,expect, chromium, firefox} from '@playwright/test'



test("test44",async function f1(){

    const ff= await firefox.launch({headless: false});

     const browser=await ff.newContext();
     const page1=await browser.newPage();
     await page1.goto("https://www.facebook.com")
     const page2=await browser.newPage();
     await page2.goto("https://www.gmail.com")
 
     const browser1=await ff.newContext();
     const page3=await browser1.newPage();
     await page3.goto("https://www.bookmyshow.com")
     const page4=await browser1.newPage();
     await page4.goto("https://www.google.com")


    })