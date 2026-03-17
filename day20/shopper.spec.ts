import {test} from "@playwright/test"
test("shopperstack",async({page})=>{
    await page.goto('https://www.shoppersstack.com/')
    await page.locator('#loginBtn').click()
    await page.locator('#Email').fill('hemlo12@gmail.com')
    await page.locator('#Password').fill('Hello@12')
    await page.locator('//span[.="Login"]').click()
    await page.locator('#addToCart').first().click()
    await page.locator('#cartIcon').first().click()
    await page.locator('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textError MuiButton-sizeSmall MuiButton-textSizeSmall  css-1bhvu8"]').first().click()

    // await page.locator('//span[.="Create Account"]').click()
    // await page.locator('[id="First Name"]').fill("Nimish")
    // await page.locator('[id="Last Name"]').fill("Khandelwal")
    // await page.locator('#Male').click()
    // await page.locator('[id="Phone Number"]').fill("9999899999")
    // await page.locator('[id="Email Address"').fill("nimish1234@gmail.com")
    // await page.locator('#Password').fill("Nimish@07")
    // await page.locator('#Register').click()

});