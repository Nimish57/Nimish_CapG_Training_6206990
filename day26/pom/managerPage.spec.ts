
class ManagerPage {
    async addCustomer(page) {
        await page.getByRole('button', { name: 'Add Customer' }).first().click();
    }
    async enterFirstName(page, fname) {
        await page.getByRole('textbox', { name: 'First Name' }).fill(fname);
    }
    async enterLastName(page, lname) {
        await page.getByRole('textbox', { name: 'Last Name' }).fill(lname);
    }
    async enterPostCode(page, code) {
        await page.getByRole('textbox', { name: 'Post Code' }).fill(code);
    }
    async submitCustomer(page) {
        await page.locator('form').getByRole('button', { name: 'Add Customer' }).click();
    }
    async openAccount(page) {
        await page.getByRole('button', { name: 'Open Account' }).click();
    }
    async selectCustomer(page, fullname) {
        await page.locator('#userSelect').selectOption(fullname);
    }
    async selectCurrency(page, money) {
        await page.locator('#currency').selectOption(money);
    }
    async processAccount(page) {
        await page.getByRole('button', { name: 'Process' }).click();
    }
    async goHome(page) {
        await page.getByRole('button', { name: 'Home' }).click();
    }
}
export default ManagerPage;