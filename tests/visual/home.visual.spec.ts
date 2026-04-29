import { test, expect } from '@playwright/test';

// Visual regression baseline for the homepage.
//
// Baselines are committed to tests/visual/home.visual.spec.ts-snapshots/
// and are regenerated via the "Update Visual Baselines" workflow when the
// design changes (so OS/font differences stay consistent with CI's Linux
// runners — local Windows runs would otherwise produce different pixels).

test('home looks unchanged', async ({ page }) => {
  await page.goto('/');

  // Wait for the page to settle: hero text rendered, fonts loaded, no
  // pending network requests. Without this the screenshot is flaky.
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('home.png', {
    fullPage: true,
    // Mask any element that animates or shows live data so it doesn't
    // contribute pixel noise to the diff. (Empty for now — add selectors
    // here if a future homepage gains a carousel, ticker, etc.)
    mask: [],
    // Stop CSS animations and transitions before snapshotting.
    animations: 'disabled',
  });
});
