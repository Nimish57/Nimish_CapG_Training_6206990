class CustomerPage {

    async selectCustomer(page, fullname) {
        await page.locator('#userSelect').selectOption(fullname);
    }

    async login(page) {
        await page.getByRole('button', { name: 'Login' }).click();
    }

    async clickDeposit(page) {
        await page.getByRole('button', { name: 'Deposit' }).click();
    }

    async enterDepositAmount(page, amount) {
        await page.locator('input[ng-model="amount"]').fill(amount);
    }

    async submitDeposit(page) {
        await page.locator('form').getByRole('button', { name: 'Deposit' }).click();
    }

    async clickWithdraw(page) {
        await page.getByRole('button', { name: 'Withdrawl' }).click();
    }

    async enterWithdrawAmount(page, amount) {
        await page.locator('input[ng-model="amount"]').fill(amount);
    }

    async submitWithdraw(page) {
        await page.getByRole('button', { name: 'Withdraw', exact: true }).click();
    }
}

export default CustomerPage;