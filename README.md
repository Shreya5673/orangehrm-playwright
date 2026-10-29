# OrangeHRM Playwright Automation

## Project Overview

This project contains automated tests for the OrangeHRM web application using **Playwright with TypeScript**. It focuses on validating login functionality and important application workflows while practicing reusable automation code and Continuous Integration (CI) using GitHub Actions.

## Tech Stack

- **Programming Language:** TypeScript
- **Automation Framework:** Playwright
- **Test Runner:** Playwright Test
- **Environment Variables:** dotenv
- **CI/CD:** GitHub Actions
- **Browsers:** Chromium, Firefox, and WebKit

## Project Objectives

- Automate login functionality.
- Validate application behavior using assertions.
- Manage test credentials securely through environment variables.
- Practice cross-browser testing.
- Execute automated tests in headless mode.
- Run tests automatically through GitHub Actions.

## Project Structure

```text
orangehrm-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   └── LoginPages.ts
├── tests/
│   └── LoginPage.spec.ts
├── .env.qa
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

*Note: Update the structure above to match the actual files in your repository.*

## Prerequisites

- Node.js and npm
- Git
- Visual Studio Code
- A valid OrangeHRM test environment

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd orangehrm-playwright
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

For Linux CI environments, install the required browser dependencies:

```bash
npx playwright install --with-deps
```

## Environment Configuration

Create a `.env.qa` file in the project root and configure the required variables:

```env
BASE_URL=your_orangehrm_url
ORANGEHRM_USERNAME=your_test_username
ORANGEHRM_PASSWORD=your_test_password
```

Replace the example values with your actual test environment details.

**Security:** Never commit real credentials or the `.env.qa` file to GitHub. Add the environment file to `.gitignore`. Use GitHub Actions secrets for CI credentials.

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/LoginPage.spec.ts
```

View the HTML test report:

```bash
npx playwright show-report
```

## Cross-Browser Testing

The project is configured to execute tests across supported browsers:

- Chromium
- Firefox
- WebKit

Run tests in a specific browser using the appropriate Playwright project configuration.

## Continuous Integration

GitHub Actions is used to execute the Playwright test suite automatically when code is pushed or a pull request is created against the configured branches.

The workflow installs dependencies, runs the tests in headless mode, and can upload the HTML report as a workflow artifact.

**CI requirement:** Ensure the Playwright configuration uses `headless: true` in GitHub Actions unless a virtual display is explicitly configured.

## Test Reporting

Playwright provides test results and an HTML report to help identify failed tests and investigate issues.

```bash
npx playwright show-report
```

Screenshots, traces, and videos can also be configured to help debug failures.

## Future Improvements

- Expand login and negative test scenarios.
- Apply the Page Object Model (POM).
- Improve reusable fixtures and helper functions.
- Add API testing.
- Improve test data management.
- Integrate test reports and failure artifacts into GitHub Actions.
- Expand regression coverage.

## Learning Outcomes

This project demonstrates practical learning in browser automation, TypeScript, test assertions, environment configuration, cross-browser testing, and automated test execution through GitHub Actions.

## Disclaimer

This project is intended for learning and testing purposes. Use only authorized OrangeHRM test environments and test accounts.
