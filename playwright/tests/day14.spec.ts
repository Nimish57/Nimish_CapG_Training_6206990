import {test} from "@playwright/test"
test("get by methods",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    // await page.getByRole("textbox",{name:"Username",exact:true}).fill("standard_user")
    await page.getByTestId("Username").fill("standard_user")
    await page.getByRole("textbox",{name:"Password",exact:true}).fill("secret_sauce")
});