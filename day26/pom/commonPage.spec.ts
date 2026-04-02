class CommonPage {

    async waitForWithdrawForm(page) {
        await page.getByText("Amount to be Withdrawn").waitFor();
    }

    async waitForSuccess(page) {
        await page.getByText("Transaction successful").waitFor();
    }

    async takeScreenshot(page) {
        await page.screenshot({ path: "withdraw_success.png", fullPage: true });
    }

    async logout(page) {
        const logoutBtn = page.getByRole("button", { name: "Logout" });
        await logoutBtn.waitFor();
        await logoutBtn.click();
    }
}

export default CommonPage;