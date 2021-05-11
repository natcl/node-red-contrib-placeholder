/* eslint-env mocha */
const helper = require('node-red-node-test-helper')
const placeholder = require('../placeholder.js')
const assert = require('assert')

helper.init(require.resolve('node-red'))

describe('placeholder Node', function () {
  afterEach(function () {
    helper.unload()
  })

  it('should be loaded', function (done) {
    const flow = [{ id: 'n1', type: 'placeholder', name: 'placeholder' }]
    helper.load(placeholder, flow, function () {
      const n1 = helper.getNode('n1')
      assert.strictEqual(n1.name, 'placeholder')
      done()
    })
  })
})
