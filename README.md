# Playwright E2E Suite

> Modern end-to-end testing in **TypeScript** with **Playwright** — cross-browser, parallel runs, screenshot diffing, and **GitHub Actions**.

[![Playwright Tests](https://github.com/YOUR_GH_USER/playwright-e2e-suite/actions/workflows/playwright.yml/badge.svg)](https://github.com/YOUR_GH_USER/playwright-e2e-suite/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![Playwright](https://img.shields.io/badge/playwright-1.43-2EAD33)
![Node](https://img.shields.io/badge/node-20-green)
![License](https://img.shields.io/badge/license-MIT-blue)

**📊 Live test report:** https://YOUR_GH_USER.github.io/playwright-e2e-suite/

> _Replace `YOUR_GH_USER` with your GitHub username after pushing._

## Tech Stack

- **Language:** TypeScript 5
- **Framework:** Playwright Test
- **Runtime:** Node.js 20
- **CI:** GitHub Actions (sharded × 3, merged HTML report → GitHub Pages)
- **Tooling:** ESLint + Prettier

## Features

- Cross-browser: Chromium, Firefox, WebKit, Mobile Chrome
- Fully parallel by default
- **Visual regression** with `toHaveScreenshot()` baselines
- API tests via Playwright's `request` fixture
- Page Object Model
- Trace viewer + video on failure
- HTML + JUnit reports
- **CI sharding** across 3 runners with merged blob → HTML report published to GitHub Pages

## Project Structure

```
playwright-e2e-suite/
├── tests/
│   ├── e2e/         # User-flow scenarios
│   ├── visual/      # Screenshot diffing
│   └── api/         # API-level tests
├── pages/           # Page Object classes
├── fixtures/        # Custom fixtures
├── utils/           # Helpers
├── .github/workflows/playwright.yml
├── playwright.config.ts
└── tsconfig.json
```

## Running Locally

```bash
npm install
npx playwright install --with-deps

npm test                       # all tests, all browsers
npm run test:chromium          # single browser
npm run test:headed            # headed mode
npm run report                 # open last HTML report
npm run codegen                # record new flow
```

## Visual Baselines

```bash
npm run test:update-snapshots  # regenerate baselines after intentional UI changes
```

## CI

`.github/workflows/playwright.yml` runs the suite across **3 shards** on every push, PR, and nightly. Blob reports from each shard are merged into a single HTML report and **published to GitHub Pages**.

### Enabling the live report (one-time GitHub setup)

1. Push the repo to GitHub
2. **Settings** → **Pages** → **Source: GitHub Actions**
3. Push to `main` — `publish-report` deploys to `https://YOUR_GH_USER.github.io/playwright-e2e-suite/`

## License

MIT
