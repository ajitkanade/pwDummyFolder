import { test, expect } from '@playwright/test';
import playerdata from "../test-data/playerdata.json";

test.describe("Add player from Player Data file", () => {
for(const player of playerdata){
test("add new player"+player.playerName, async ({ page }) => {
  
   //login page
  await page.goto("http://localhost:3000/analytics");
  await page.locator("//button[@data-testid='header-login-button']").click();
  await page.locator("#email").fill("admin@cricketdb.com");
  await page.locator("#password").fill("admin123");
  await page.locator("//button[@data-testid='login-submit']").click();
  await page.locator("//nav//span[text()='Players']").click();

  // Add player
  await page.locator("//button[@data-testid='add-player-button']").click();
  await page.locator("//label[text()='Player Name']/following-sibling::div/input").fill(player.playerName);
  await page.locator("//select[@data-testid='country-select']").selectOption(player.playerCountry)
  await page.locator("//div[@data-testid='start-year-input']/child::div/input").fill(player.playerYear)
  await page.locator("//select[@data-testid='role-select']").selectOption(player.playerROle)
  await page.locator("//input[@value='"+player.playerGender+"']").click()
  await page.locator("//button[@data-testid='submit-button']").click()
  
})

}
})

