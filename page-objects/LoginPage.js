

class LoginPage{


    constructor(page){

  //login page
 
   this.loginButton= page.locator("//button[@data-testid='header-login-button']")
   this.emailTextButton= page.locator("#email")
   this.passwordTextBox= page.locator("#password")
   this.signInButton = page.locator("//button[@data-testid='login-submit']")
   }

   async clickOnLoginButton(){
       this.loginButton.click()
   }

   async login(username,password){
      this.emailTextButton.fill(username)
      this.passwordTextBox.fill(password)
      this.signInButton.click();
   }
}

module.exports={LoginPage}