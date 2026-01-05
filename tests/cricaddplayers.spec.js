import { test, expect } from '@playwright/test';

test("crick", async ({ page }) => {
  await page.goto("http://localhost:3000/analytics");
  await page.locator("//button[@data-testid='header-login-button']").click();
  await page.locator("#email").fill("admin@cricketdb.com");
  await page.locator("#password").fill("admin123");
  await page.locator("//button[@data-testid='login-submit']").click();
  await page.locator("//nav//span[text()='Players']").click();
  await page.locator("//button[@data-testid='add-player-button']").click();
  await page.locator("//label[text()='Player Name']/following-sibling::div/input").fill("Arjun");
  await page.locator("//select[@data-testid='country-select']").selectOption("India")
  await page.locator("//div[@data-testid='start-year-input']/child::div/input").fill("2012")
  await page.locator("//select[@data-testid='role-select']").selectOption("Bowler")
  await page.locator("//input[@value='MALE']").click()
  await page.locator("//button[@data-testid='submit-button']").click()
  
});
