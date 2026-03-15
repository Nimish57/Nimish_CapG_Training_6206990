import test from "@playwright/test";
import fs from 'fs'
import path from "path"
//path.join(__dirname,"../../testdata/data.json")
let data=fs.readFileSync(path.join(__dirname,"../../testdata/data.json"))
let datafile=JSON.parse(data)
test("jsdata",async({page})=>{
    console.log(datafile);
    for(let a of datafile){
        console.log(a.greet);
        
    }
    
})
test("forapplication",async({page})=>{
    await page.goto(datafile.url)
    await page.locator('//input[@id="username"]').fill(datafile.username)
    await page.locator('//input[@id="password"]').fill(datafile.password)
})