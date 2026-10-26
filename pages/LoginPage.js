const BasePage = require('../utils/BasePage');

class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username =
            page.locator('input[name="username"]');

        this.password =
            page.locator('input[name="password"]');

        this.loginButton =
            page.locator('button[type="submit"]');
    }

    async login(username, password) {

        await this.type(
            this.username,
            username
        );

        await this.type(
            this.password,
            password
        );

        await this.click(
            this.loginButton
        );
    }
}

module.exports = LoginPage;