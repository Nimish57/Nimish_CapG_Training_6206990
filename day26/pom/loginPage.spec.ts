class LoginPage {

    async navigate(page, url) {
        await page.goto(url);
    }

    async clickBankManager(page) {
        await page.getByRole('button', { name: 'Bank Manager Login' }).click();
    }

    async clickCustomerLogin(page) {
        await page.getByRole('button', { name: 'Customer Login' }).click();
    }
}

export default LoginPage;