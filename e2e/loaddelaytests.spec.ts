import { expect } from '@playwright/test'
import { test } from './test-with-fixture'

test('Load Delay tests', async ({ page, ai }) => {
  await page.goto('/')

  await ai(`click the Load Delay hyperlink`)
  await ai('Press the button')
})