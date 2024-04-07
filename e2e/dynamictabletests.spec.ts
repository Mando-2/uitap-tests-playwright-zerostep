import { expect } from '@playwright/test'
import { test } from './test-with-fixture'

// this test is a simple example of how to use the AI to capture values from a table
// sometimes the test will fail becasue the Disk Column value is returned as MB and sometimes as MB/s

test('zerostep example', async ({ page, ai }) => {
  await page.goto('/')

  await ai(`click the Dynamic Table`)
  let chromeMemory = await ai('Capture the value for Memory from the row containing Chrome')
  let chromeDisk = await ai('Capture the value for Disk from the row containing Chrome')
  let chromeNetwork = await ai('Capture the value for Network from the row containing Chrome')
  let chromeCpu = await ai('Capture the value for CPU from the row containing Chrome')
  
  console.log('chromeMemory:', chromeMemory)
  console.log('chromeDisk:', chromeDisk)
  console.log('chromeNetwork:', chromeNetwork)
  console.log('chromeCpu:', chromeCpu)

  expect(chromeMemory).toContain('MB')
  expect(chromeDisk).toContain('MB/s')
  expect(chromeNetwork).toContain('Mbps')
  expect(chromeCpu).toContain('%')
})