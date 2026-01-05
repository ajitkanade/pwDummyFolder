

// //first way

// async function f1({page}) {

//     await page.goto("https://www.facebook.com")

    
// }

// test("test_fixture", f1)

//second way

 import {test,expect} from "@playwright/test";


test("test5",async function f1({page}) {

    await page.goto("https://www.saucedemo.com/")
    await page.locator("id=user-name").fill("standard_user");
    await page.locator("id=password").fill("secret_sauce");
    await page.locator("id=login-button").click();

    
})