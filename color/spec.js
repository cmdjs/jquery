define(function(require) {
  
  var $ = require('$');

  describe('color', function() {
    it('should has no color method', function() {
      expect($).to.not.have.property('Color');
    });

    it('should has color method', function() {
      require('./dist/color');
      console.log($);
      expect($.Color).to.be.a('function');
    });
  });

});
