const BasePage = require('../utils/BasePage');

class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        this.dashboardHeader =
            page.locator('.oxd-topbar-header-title');

        this.profileDropdown =
            page.locator('.oxd-userdropdown-tab');

        this.logoutLink =
            page.locator('text=Logout');

    }

    async logout() {

        await this.profileDropdown.click();

        await this.logoutLink.click();

    }
}

module.exports = DashboardPage;