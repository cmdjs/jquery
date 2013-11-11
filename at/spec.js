define(function(require) {

  describe('at.js', function() {

    it('should has atwho method', function() {
      require('./src/atwho');
      var $ = require('$');
      expect($.fn.atwho).to.be.a('function');
    });
  });

});
