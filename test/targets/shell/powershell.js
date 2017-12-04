/* global it */

'use strict'

require('should')

module.exports = function (HTTPSnippet, fixtures) {
  it('should construct the simplest possible call', function () {
    var result = new HTTPSnippet(fixtures.requests.short).convert('shell', 'powershell', {
      indent: false
    })

    result.should.be.a.String
    result.should.eql('Invoke-WebRequest "http://mockbin.com/har"')
  })
}
