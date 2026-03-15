import { test,expect } from "@playwright/test";
import path from "path";
import excel from "exceljs"
test("write_excel_data",async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../testdata/result.xlsx"))
    let sheet=await book.getWorksheet('Sheet4');
    if(!sheet){
        sheet=await book.addWorksheet('Sheet4')
    }
    sheet.getRow(1).getCell(1).value="Nimish";
    await book.xlsx.writeFile(path.join(__dirname,"../testdata/result.xlsx"))
})
test.only('Write_multipe_data',async({page})=>{
    let book= new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../testdata/result.xlsx"));
    let sheet=await book.getWorksheet('Sheet5');
    if(!sheet){
        sheet=await book.addWorksheet('Sheet5');
    }
    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill('shoes');
    await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').first().waitFor({state:'visible'});
    let items=await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents();
    let r=1;
    for(let item of items){
        sheet.getRow(r++).getCell(1).value=item;
    }
    await book.xlsx.writeFile(path.join(__dirname,"../testdata/result.xlsx"));
})