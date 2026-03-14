import { test } from "@playwright/test";

// test("for of example", async ({ page }) => {
//   await page.goto("https://www.amazon.com/");
  
//   const products = page.locator('//span[@class="a-size-medium a-color-base a-text-normal"]');
  
//   const count = await products.count();

//   for (let i = 0; i < count; i++) {
//     const name = await products.nth(i).textContent();
//     console.log(name);
//   }
// });
// test("dropdown", async ({ page }) => {
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");
//     await page.locator('#country_code').selectOption("+91")
//     await page.locator('#phone').fill('7011728651')
//     await page.locator('#male').click()
//     await page.locator('#select3').selectOption("India")
//     await page.locator('#select5').selectOption("Rajasthan")
//     await page.locator('//select[@class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"]').last().selectOption("Alwar")
//     await page.locator('#select7').selectOption("1")
//     await page.locator('#continuebtn').click()
// });
// test("multi_select", async ({ page }) => {
//    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//    await page.locator("#select-multiple-native").selectOption([{value:"Rain Jacket Women Windbreaker Striped Climbing Raincoats"},{value:"Opna Women's Short Sleeve Moisture"}])
//    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// })
// test("custom", async ({ page }) => {
//    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
//    await page.locator('//div[@class="sort-sortBy"]').hover()
//    await page.locator('//div[@class="sort-sortBy"]').click({force:true})
//    const option = await page.locator('//ul[@class="sort-list"]/li').all()
//    for(const i of option){
//     const text = await i.textContent()
//     console.log(text);
//     if(text?.includes("Better")){
//         await i.click()
//     }
//    }

// //    await page.locator("#select-multiple-native").selectOption([{value:"Rain Jacket Women Windbreaker Striped Climbing Raincoats"},{value:"Opna Women's Short Sleeve Moisture"}])
// //    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// })
// test("custom", async ({ page }) => {
// //    await page.goto("https://www.amazon.in/")
// //    await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
// //    const option = await page.locator('//div[@class="left-pane-results-container"]/div').all()
// //    for(const i of option){
// //     const text = await i.textContent()
// //     console.log(text);
// //     if(text?.includes("Better")){
// //         await i.click()
// //     }
// //    }
//     await page.goto('https://www.amazon.com/');
//     await page.locator('#twotabsearchtextbox').fill("shoes");
//     await page.locator('//div[@class="left-pane-results-container"]').waitFor({state:"visible"});
//     const options=await page.locator('//div[@class="left-pane-results-container"]/div').all();
//     for(const option of options){
//         const text=await option.textContent();
//         console.log(text);
//         if(text?.includes("women sneakers")){
//             option.click();
//         }
//     }
//     await page.waitForTimeout(3000);

// //    await page.locator("#select-multiple-native").selectOption([{value:"Rain Jacket Women Windbreaker Striped Climbing Raincoats"},{value:"Opna Women's Short Sleeve Moisture"}])
// //    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// })
// test("waits",async({browser})=>{
//     let context = await browser.newContext()
//     let page = await context.newPage()
//     await page.goto("https://www.amazon.com/")
//     let page2 = await context.newPage()
//     await page2.goto("https://www.flipkart.com/")
//     await page.getByRole('button',{name:'✕'});
//     await page.getByPlaceholder('Search for Products, Brands and More').first().fill("shoes");
//     await page.keyboard.press("Enter");
//     const [newpage]=await Promise.all([page.waitForEvent('popup'),
//         page.locator('//div[@class="bLCLBY nr15la"]').first().click()]);
    
// })
// test("multiple_tabs",async ({browser})=>{
//     let context=await browser.newContext();
//     let page=await context.newPage();
//     await page.goto('https://www.flipkart.com/')
//     // let page2=await context.newPage();
//     // await page2.goto('https://www.amazon.com/')
//     await page.getByRole('button',{name:'✕'});
//     await page.getByPlaceholder('Search for Products, Brands and More').first().fill("shoes");
//     await page.keyboard.press("Enter");
//     const [newpage]=await Promise.all([page.waitForEvent('popup'),
//         page.locator('//div[@class="bLCLBY nr15la"]').first().click()]);
//     console.log(page.url());
//     console.log(newpage.url());
    
    
//     await page.waitForTimeout(3000);
// })
// test("multiple_tabs",async ({browser})=>{
//     let context=await browser.newContext();
//     let page=await context.newPage();
//     await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1');
//     let [page2]=await Promise.all([
//         page.waitForEvent('popup'),
//         page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').last().click()
//     ])
//     page2.getByRole('button',{name:"Add to Cart"}).click();
//     await page.waitForTimeout(3000);
// })
test("multiple_tabs",async ({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    await page.locator('#writeArea').fill("Hello 1234")
    await page.locator('#fileName').fill("Hello.txt")
    await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    await page.waitForTimeout(3000);
})