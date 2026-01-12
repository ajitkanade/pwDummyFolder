
class cric{
 constructor (page){
  this.page = page;
  this.pageloginButton= page.locator("//button[@data-testid='header-login-button']")
  this.userName= page.locator("#email")
  this.password= page.locator("#password")
  this.loginSubmit= page.locator("//button[@data-testid='login-submit']")
  this.playersButton= page.locator("//nav//span[text()='Players']")
  this.addPlayerButton= page.locator("//button[@data-testid='add-player-button']")
  this.playerName= page.locator("//label[text()='Player Name']/following-sibling::div/input")
  this.countrySelect= page.locator("//select[@data-testid='country-select']")
  this.startYear= page.locator("//div[@data-testid='start-year-input']/child::div/input")
  this.roleSelect= page.locator("//select[@data-testid='role-select']")
  this.submitButton=page.locator("//button[@data-testid='submit-button']")
  }
   async playerAdd(username,password,Pname, gender){
   await this.pageloginButton.click()
   await this.userName.fill(username)
   await this.password.fill(password)
   await this.loginSubmit.click()
   await this.playersButton.click()
   await this.addPlayerButton.click()
   await this.playerName.fill(Pname)
   await this.countrySelect.selectOption("India")
   await this.startYear.fill("2026")
   await this.roleSelect.selectOption("Bowler")
   await this.page.locator("//input[@value='"+gender.toUpperCase()+"']").click();
   await this.submitButton.click()

   }


}
module.exports={cric}