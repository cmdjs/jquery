define(function(require) {

  describe('at.js', function() {

    it('should has atwho method', function() {
      require('./dist/atwho');
      var $ = require('$');
      expect($.fn.atwho).to.be.a('function');
    });
  });

});
