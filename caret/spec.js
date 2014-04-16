define(function(require) {

  describe('caret.js', function() {

    it('should has caret method', function() {
      require('./dist/caret');
      var $ = require('$');
      expect($.fn.caret).to.be.a('function');
    });
  });

});
