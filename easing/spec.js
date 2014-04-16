define(function(require) {

  var $ = require("$");
  require('./dist/easing');

  describe('easing', function() {
    it('should has easing name swing', function() {
      expect($.easing.swing).to.be.a('function');
    });
  });

});

