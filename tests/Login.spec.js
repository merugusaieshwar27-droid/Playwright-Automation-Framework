const Logger =
require('../utils/Logger');

const env =
require('../utils/Environment');

const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const data = require('../fixtures/testData');

let loginPage;

let dashboardPage;

const DashboardPage =
require('../pages/DashboardPage');

test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    dashboardPage =
new DashboardPage(page);

    await page.goto(
    env.baseUrl
);

});

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        await page.screenshot({

            path: `screenshots/${testInfo.title}.png`

        });

    }

});

test('Login Test 1 @smoke', async ({ page }) => {

    Logger.info('Login Started');

    await loginPage.login(
        data.username,
        data.password
    );

    Logger.info('Login Successful');

    console.log(await page.url());

    await expect(page).toHaveURL(/dashboard/);

    await expect(
    dashboardPage.dashboardHeader
).toBeVisible();

Logger.info('Dashboard Verified');

await dashboardPage.logout();

Logger.info('Logout Successful');

await expect(page).toHaveURL(/login/);

});

test('Login Test 2', async ({ page }) => {

    await loginPage.login(
        data.username,
        data.password
    );

});