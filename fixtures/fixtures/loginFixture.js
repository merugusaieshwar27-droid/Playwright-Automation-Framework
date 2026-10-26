  const { test: base, expect } =
require('@playwright/test');

const LoginPage =
require('../../pages/LoginPage');

exports.test = base.extend({

    loggedInPage: async (
        { page },
        use
    ) => {

        const loginPage =
            new LoginPage(page);

        await page.goto(
    'https://opensource-demo.orangehrmlive.com/'
        );

        await loginPage.login(
    'Admin',
    'admin123'

        );

        await page.waitForURL(
            /dashboard/
        );

        await use(page);
    }

});

exports.expect = expect;