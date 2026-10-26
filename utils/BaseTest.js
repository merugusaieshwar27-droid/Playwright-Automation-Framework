const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

class BaseTest {

    constructor(page) {

        this.loginPage = new LoginPage(page);

        this.dashboardPage = new DashboardPage(page);

    }

}

module.exports = BaseTest;