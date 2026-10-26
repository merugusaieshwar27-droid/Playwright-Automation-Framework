const { test, expect } = require('@playwright/test');

const BaseTest = require('../utils/BaseTest');

const data = require('../fixtures/testData');

const env = require('../utils/Environment');

for (const user of data) {

    test(`Login Test ${user.id}-${user.username}`, async ({ page }) => {

        const baseTest = new BaseTest(page);

        await page.goto(env.baseUrl);

        await baseTest.loginPage.login(
            user.username,
            user.password
        );

        await expect(page).toHaveURL(/dashboard/);

        await expect(
            baseTest.dashboardPage.dashboardHeader
        ).toBeVisible();

    });

}