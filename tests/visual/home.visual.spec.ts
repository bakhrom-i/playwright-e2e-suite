import { test, expect } from '@playwright/test';

test('home looks unchanged', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('home.png', { fullPage: true });
});
