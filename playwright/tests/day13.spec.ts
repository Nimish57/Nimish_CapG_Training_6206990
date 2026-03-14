import {test} from "@playwright/test"

//  test("union",async ({page})=>{
//     await page.goto("https://www.amazon.com/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("phones");
//     await page.keyboard.press("Enter");
//     const items=await page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/descendant::span)[3] | (//a[@class="a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"]/span[@class="a-price"]/span[@class="a-offscreen"])[1]')
//     console.log(await items.allTextContents());
//  })

test("get by methods",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("User").fill("student")
    // await page.getByLabel("Password").fill("Password123")
    // await page.getByText("Submit").first().click()
    // // await page.getByRole("button",{name:"Submit"}).click()
    await page.getByRole("textbox",{name:"Username",exact:true}).fill("gbhn")
    await page.getByPlaceholder("Enter your name")
});