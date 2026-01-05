
import {test,expect} from "@playwright/test";

// async function f1({page}) {

//     await page.goto('https://www.saucedemo.com/');
//     await page.locator('//input[@id="user-name"]').fill('standard_user')
//     await page.locator('//input[@id="password"]').fill ('secret_sauce')
//     await page.locator('//input[@id="login-button"]').click
    
// }

async function f1({page}) {

  await page.goto("https://www.facebook.com")
  await page.locator('//input[@id="email"]').fill('ajit_kanade@rediffmail.com')
  await page.locator('//input[@id="pass"]').fill('Moraya@23')
 // await page.locator('//button[@name="login"]').click
  await page.locator('//a[starts-with(text(),"Forg")]')

}


test ("locator-test",f1)