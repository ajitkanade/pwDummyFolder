import {test,expect} from "@playwright/test";


async function f1({page}) {

    await page.goto("https://www.saucedemo.com")
    await page.locator("id=user-name").fill("standard_user")
    await page.locator("id=password").fill("secret_sauce")
    await page.locator("id=login-button").click();
}

test ("testlo" ,f1)