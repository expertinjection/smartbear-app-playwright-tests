import { test, expect } from './../../fixtures/PageObject';
import { ScreenshotUtils } from '../../utils/ScreenshotUtils';

test.describe('SmartBear App Login Page visual verification', () =>{
  test('Login Page Visual Regression', async({ loginPage }) => {
    await expect(loginPage.loginForm).toBeVisible();
    await ScreenshotUtils.takeScreenshot(loginPage.page);
  });
});