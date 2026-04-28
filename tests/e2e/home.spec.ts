import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Home page', () => {
  test('loads and shows heading', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.assertLoaded();
  });

  test('navigates to get started', async ({ page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.getStarted.click();
    await expect(page).toHaveURL(/.*intro/);
  });
});
