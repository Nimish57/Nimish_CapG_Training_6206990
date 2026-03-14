import {test} from "@playwright/test"

test("click",async ({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Phones");
    await page.keyboard.press("Enter");
    await page.locator('//div[@id="p_n_g-1003517064111/51258619031"]/descendant::a[@aria-label="Apply the filter Android 14 to narrow results"]/descendant::i').click();
    await page.screenshot({path: 'screenshot/page.png'})
})