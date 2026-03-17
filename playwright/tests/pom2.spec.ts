// import {test} from "@playwright/test"
// import example from "../pom/examp.page"
// import fs from "fs"
// import path from "path"
// let user=fs.readFileSync(path.join(__dirname,"../testdata/amazon.json"));
// let userfile=JSON.parse(user);
// test("pom",async({page})=>{
//     let examplepage=new example(page);
//     await page.goto(url);
//     await page.locator('#nav-search-submit-button').click()
//     await page.locator('//span[text()="10 GB & Above"]').click()
//     await page.locator('')
// })
import {test} from "@playwright/test"
import path from "path"
import fs from "fs"
import amazon from "../pom/examp.page"

let productsfile=JSON.parse(fs.readFileSync(path.join(__dirname,"../testdata/amazon.json")))

test("pom2",async({page})=>{
    let amazonweb=new amazon(page);
        console.log(productsfile.products);
        await amazonweb.searchproduct(productsfile.products);
        await amazonweb.select10gbram(page);
        let [newpage]=await Promise.all([page.waitForEvent('popup'),amazonweb.selectproduct(page,3)]) ;
        await amazonweb.additem(newpage,4)
})