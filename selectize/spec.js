define(function(require) {

  var $ = require("$");
  var Selectize = require('./src/selectize');

  describe('Selectize', function() {
    it('should has selectize method', function() {
      expect($.fn.selectize).to.be.a('function');
    });
  });
});
