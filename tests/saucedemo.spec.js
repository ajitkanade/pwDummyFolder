import {test,except} from '@playwright/test'

async function f1({page}) {

    await page.goto("https://www.saucedemo.com/")
        await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click
    await page.locator("//div[text()='Sauce Labs Backpack]").click
    await page.locator("//button[@id='add-to-cart']").click
}  

test ("saucedemo",f1)