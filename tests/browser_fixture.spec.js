import { test, expect } from '@playwright/test';

// //first way

// async function f1({browser}){

// const page1=await browser.newPage();
// await page1.goto("https://www.bookmyshow.com")

// const page2= await browser.newPage();
// await page2.goto("https://www.facebook.com")

// }

// test ("test55",f1)

//second way

test ("test55",async ({browser}) => {

const page1=await browser.newPage();
await page1.goto("https://www.bookmyshow.com")

const page2= await browser.newPage();
await page2.goto("https://www.facebook.com")

})