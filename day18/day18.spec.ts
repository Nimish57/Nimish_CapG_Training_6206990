import { test,expect } from "@playwright/test";
import path from "path";
//--------------------------------Authentication-----------------------------------------------//
// test("",async({browser})=>{
//     let context=await browser.newContext({httpCredentials:{
//         username:"admin",
//         password:"admin"
//     }})
//     let page=await context.newPage();
//     await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
//     let page2=await context.newPage();
//     await page2.goto('https://the-internet.herokuapp.com/basic_auth')
//     await expect(page2.locator('//div[@class="example"]/p')).toHaveText('Congratulations! You must have the proper credentials.');
//-------------------------Uploadfile-CASE-1---------------------------------------------------//
// })
// test("upload file",async({page})=>{
//     console.log(__dirname);
//     console.log(__filename);
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('#singleFileInput').setInputFiles("C:/Users/nimis/Downloads/Book1.xlsx")
//     await page.locator('//form/button[@type="submit"]').first().click()
//     await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/nimis/OneDrive/Desktop/playwright2/tests/uploadfile/demo.txt","C:/Users/nimis/OneDrive/Desktop/playwright2/tests/uploadfile/demo1.xlsx"])
//     await page.locator('//form/button[@type="submit"]').last().click()  
// })

//----------------------------------CASE-2---------------------------------------------------//
// test("upload file",async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
//     await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../screenshot/page.png"))
//     await page.locator('//form/button[@type="submit"]').first().click()
//     await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"uploadfile/demo1.xlsx"),path.join(__dirname,"uploadfile/demo.txt")])
//     await page.locator('//form/button[@type="submit"]').last().click()
// })







test("multiple_tabs",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    let downloadsfol="C:/Users/nimis/OneDrive/Desktop/playwright2/downloads"
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('#writeArea').fill("Hello 1234")
    await page.locator('#fileName').fill("Hello.txt")

    await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    let [download_file]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    await page.waitForTimeout(3000);
    let filename = await download_file.suggestedFilename()
    console.log(filename);
    await download_file.saveAs(path.join(downloadsfol,filename)); 
})