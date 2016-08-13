'use strict'

const assert = require('assert')
const encody = require('./')

assert.equal(encody``, '')
assert.equal(encody`:a?`, ':a?')
assert.equal(encody`${':a?'}`, '%3Aa%3F')
assert.equal(encody`:?a${':?'}a:?`, ':?a%3A%3Fa:?')
