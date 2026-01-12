import{test,expect} from '@playwright/test'
import { cric } from '../page-objects/cricPOM.js'

test("Pomcric", async ({page}) => {
    const CricP =new cric(page)
     await page.goto("http://localhost:3000/analytics");
     await CricP.playerAdd("admin@cricketdb.com","admin123","ROHIT","male");
}
)
