define(function(require) {

  describe('color', function() {
    it('should has no color method', function() {
      var $ = require('$');
      expect($).to.not.have.property('Color');
    });

    it('should has color method', function() {
      require('./dist/color');
      var $ = require('$');
      expect($.Color).to.be.a('function');
    });
  });

});
