import {test} from "@playwright/test";
// test("Frames",async({page})=>{
//     await page.goto("https://ui.vision/demo/webtest/frames/")
//     let frame = await page.frames()
//     for(const fram of frame){
//         console.log(await fram.title());
//     }
//     console.log(frame.length);
//     const pageframe=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
//     await pageframe?.locator('//div/input[@name="mytext3"]').fill("hello")
//     const pageframe2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
//     const pageframe3=await pageframe2?.frameLocator('//iframe');
//     await pageframe3?.locator('//div[@class="AB7Lab Id5V1"]').first().click();
// })
// test("Alert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('#alertBtn').click()
//     await page.keyboard.press('Enter')
//     await page.locator('#confirmBtn').click()
//     await page.keyboard.press('Enter')
// })
// test("Alert", async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     page.once('dialog', async dialog => {
//         await dialog.accept();
//     });
//     await page.locator('#alertBtn').click();

//     page.once('dialog', async dialog => {
//         await dialog.accept();
//     });
//     await page.locator('#confirmBtn').click();

// });
// test("Alert Confirm Prompt", async ({ page }) => {

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     // Alert
//     page.once('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.accept();
//     });
//     await page.locator('#alertBtn').click();

//     // Confirm
//     page.once('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.accept();   // use dismiss() for Cancel
//     });
//     await page.locator('#confirmBtn').click();

//     // Prompt
//     page.once('dialog', async dialog => {
//         console.log(dialog.message());
//         await dialog.accept("Nimish");  // text entered in prompt
//     });
//     await page.locator('#promptBtn').click();

// });
// test("Alert Confirm Prompt", async ({ page }) => {

//     page.on('dialog', async dialog => {
//         console.log("Dialog Type:", dialog.type());
//         console.log("Dialog Message:", dialog.message());
//         if (dialog.type() === "alert") {
//             await dialog.accept();
//         }
//         else if (dialog.type() === "confirm") {
//             await dialog.accept(); 
//         }
//         else if (dialog.type() === "prompt") {
//             console.log("Default Value:", dialog.defaultValue());
//             await dialog.accept("Nimish");
//         }
//     });
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.locator('#alertBtn').click();
//     await page.locator('#confirmBtn').click();
//     await page.locator('#promptBtn').click();

// });
test("Notificationssss", async ({ browser }) => {
    let context = await browser.newContext({permissions:["notifications"]})
    let page = await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.locator('//button[@id="browNotButton"]').click()
    let result = await page.evaluate(()=>{
        return Notification.requestPermission()
    })
    console.log(result);
    
})