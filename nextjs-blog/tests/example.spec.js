// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
import { test, expect } from '@playwright/test';

test('has Hello Professor', async ({ page }) => {
  await page.goto('http://localhost:3000/');  // Replace with the URL your app is being served

  // Expect the text "Hello Professor" to be on the page.
  const helloProfessor = await page.$('text=Hello Professor');
  expect(helloProfessor).toBeTruthy();
});

// test('has main tag', async ({ page }) => {
//   await page.goto('http://localhost:3000/');  // Replace with the URL your app is being served

//   // Expect the main tag to be on the page.
//   const mainTag = await page.$('main');
//   expect(mainTag).toBeTruthy();
// });


