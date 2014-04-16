define(function(require) {

  var $ = require("$");
  var Spectrum = require('./dist/spectrum');

  describe('Spectrum', function() {
    it('should has spectrum method', function() {
      expect($.fn.spectrum).to.be.a('function');
    });
  });
});
