import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path";
// test("reading_data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,'../../testdata/result.xlsx'))
//     let sheet=await book.getWorksheet("Sheet1")
//     let data = await sheet?.getRow(1).getCell(1).value
//     console.log(data);

// })
// test('Reading_multiple_data',async({page})=>{
//     let book = new excel.Workbook();
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/result.xlsx"));
//     let sheet=await book.getWorksheet('Sheet1');
//     for(let i=1;i<=sheet?.actualRowCount;i++){
//         for(let j=1;j<=sheet?.actualColumnCount;j++){
//             let data=await sheet?.getRow(i).getCell(j).toString();
//             console.log(data)
//         }
//     }
// })
test.only('logindata',async({page})=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/login.xlsx"));
    let sheet=await book.getWorksheet('Sheet1');
    let data=await sheet?.getRow(1).getCell(4).toString();
    await page.goto(data)
    for(let i=2;i<=4;i++){
        for(let j=1;j<=3;j++){
            let vals=await sheet?.getRow(1).getCell(j).toString();
            let vals2=await sheet?.getRow(i).getCell(j).toString();
            await page.getByLabel(vals).fill(vals2)
        }
        
    }
    await page.locator('//button[@type="submit"]').click()
})