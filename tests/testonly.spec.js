
import{test,expect} from '@playwright/test'

test ("testonly1", async({page}) => {

    await page.goto("https://www.facebook.com")
    
})

test.only ("testonly2", async({page}) => {

    await page.goto("https://www.bookmyshow.com")
    
})

test ("testonly3", async({page}) => {

    await page.goto("https://www.flipkart.com")
    
})

test ("testonly4", async({page}) => {

    await page.goto("https://www.amazon.com")
    
})