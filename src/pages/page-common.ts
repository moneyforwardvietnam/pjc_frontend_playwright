import {Locator, Page} from "@playwright/test";

export class PageCommon {
    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async clickButtonByName(name: string) {
        await this.page.getByRole('button', {name}).click()
    }
    async clickLocatorByLabel(label: string) {
        await this.page.getByLabel(label).click()
    }
    async clickLocatorByTestId(testId: string) {
        await this.page.getByTestId(testId).click()
    }

    async chooseDate(locator: Locator, datetime: string) {
        await locator.click()
        await locator.fill(datetime)
        await locator.press('Enter')
        await this.page.locator('body').click()
    }
}