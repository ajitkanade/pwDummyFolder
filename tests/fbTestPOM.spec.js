import{test,expect} from '@playwright/test'
import { Facebook } from '../page-objects/FBPageObject'

test("facebook", async({page}) =>{
    const FB =new Facebook(page)

   await page.goto ("https://www.facebook.com")
   await FB.login("ajitkanade23@gmail.com","abc123")



    }
)