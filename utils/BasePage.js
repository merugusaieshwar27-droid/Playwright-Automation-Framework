class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await locator.click();
    }

    async type(locator, text) {
        await locator.fill(text);
    }

    async navigate(url) {
        await this.page.goto(url);
    }

}

module.exports = BasePage;