import {test} from "@playwright/test"
import {expect} from "@playwright/test"
test.use({actionTimeout:6000})
// test("get by methods",async({page})=>{
//     // await page.goto("https://www.saucedemo.com/")
//     // // await page.getByRole("textbox",{name:"Username",exact:true}).fill("standard_user")
//     // await page.getByTestId("username").fill("standard_user")
//     // await page.getByRole("textbox",{name:"Password",exact:true}).fill("secret_sauce")
//     // await page.getByText("Login").first().click()
//     // await page.goto("https://practicetestautomation.com/practice-test-login/")
//     // await page.getByRole("textbox",{name:"Username",exact:true}).fill("standard_user")
//     // await page.getByRole('textbox', { name: 'Username' }).fill("student")
//     // await page.getByRole('textbox', { name: 'Username' }).type("student")
//     // await page.getByRole('textbox', { name: 'Username' }).type("student1")
//     // await page.getByRole('textbox', { name: 'Password' }).fill("Password123")
//     // console.log(await page.getByRole('textbox', { name: 'Password' }).isVisible());
    
//     // await page.getByRole('button', { name: 'Submit' }).click()
//     // console.log(await page.getByRole('textbox', { name: 'Username' }).inputValue());

//     await page.goto("https://www.amazon.in/");
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes");
//     await page.keyboard.press("Enter");
//     await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/h2/span').nth(64).waitFor();
//     let a=await page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]/h2/span').all();
//     console.log(a);
//     // await page.getByRole('link', { name: 'Mens Indus-251 Running Shoe' }).click()

    
// });

// test("assertions",async({page})=>{
//     await page.goto("https://www.amazon.in/")

//     // await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toHaveCount(0);
//     // await expect(page).toHaveScreenshot() 
//     // await expect(page).toHaveScreenshot()
// })
test('example test', async ({ page }) => {
    await page.goto('https://amazon.in');
    await page.locator('//input[@id="twotabsearctextbox"]').fill("shoes",{timeout:5000});
    // await expect(page).toHaveTitle('Example');
    // await expect(page.locator("span")).toHaveText("Example Domain");
    // waitForTimeout(6000)(hard coded weight)

});