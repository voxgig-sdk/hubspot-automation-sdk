
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { HubspotAutomationSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HubspotAutomationSDK.test()
    equal(null !== testsdk, true)
  })

})
