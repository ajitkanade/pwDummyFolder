import{test,expect} from '@playwright/test'
import { LoginPage1, LoginPage1 } from '../page-objects/LoginPage1'

test ("Login2", async ({page})  =>{
const LoginPage1 = new LoginPage1(page)
await page.goto("http://localhost:3000/")
await LoginPage1.clickonLoginButton()
await LoginPage1.login("admin@cricketdb.com","admin123")
await expect(page).toHaveURL("http://localhost:3000/players")






})