
class LoginPage1{

constructor (page){

    //Login page
this.loginButton=page.locator("//button[@data-testid='header-login-button']")
this.emailTextButton=page.locator("#email")
this.passwordTextButton=page.locator("#password")
this.signInButton=page.locator("//button[@data-testid='login-submit']")
}

async clickOnLoginButton(){
    this.loginButton.click
}

async login(username,password){
this.emailTextButton(username)
this.passwordTextButton(password)
this.signInButton.click();  

}

}

module.exports={LoginPage1}