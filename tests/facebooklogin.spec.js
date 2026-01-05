import{test,except} from '@playwright/test'

async function f1 ({page}) {
   
    await page.goto("https://www.facebook.com/");
    await page.locator("//input[@id='email']").fill("ajit_kanade@rediffmail.com")
    await page.locator("//input[@type='password']").fill("Moraya@23")
    await page.locator("//button[@id='loginbutton']").click()
    await page.locator("//a[@class='_97w4']").click()
    


}

test("facebook",f1)