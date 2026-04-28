import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStarted: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStarted = page.getByRole('link', { name: 'Get started' });
    this.heading = page.getByRole('heading', { level: 1 });
  }

  async open() {
    await this.page.goto('/');
  }

  async assertLoaded() {
    await expect(this.heading).toBeVisible();
  }
}
