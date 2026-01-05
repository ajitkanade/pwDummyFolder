
import{test,expect} from "@playwright/test"

async function f1({page}) {

    await page.goto("https://www.amazon.com")
    await page.locator("//input[@id='twotabsearchtextbox']").fill('bean bag')
   // await page.locator()
    await page.locator("//div[@class='nav-search-submit nav-sprite']").click()
    
}

test("amazon",f1)