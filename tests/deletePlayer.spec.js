import{test,expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'

test("delete Player", async ({page}) => {
 const LoginPage = new LoginPage(page)
await page.goto("http://localhost:3000/");
await LoginPage.clickOnLoginButton();
await LoginPage.login("admin@cricketdb.com","admin123")
await expect(page).toHaveURL("http://localhost:3000/players")

const dialogPromise =  page.waitForEvent("dialog")
await page.locator("//div[text()='Virat Kohli']/ancestor::div[role='row']//button[starts-with(@data-testid,'delete')]").click()
const dialog =await dialogPromise;
let msg=await dialog.message();
expect(msg).toBe("Are you sure you want to delete this palyer?")
await dialog.accept();
}
);