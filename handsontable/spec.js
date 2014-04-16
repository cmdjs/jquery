define(function(require) {

  var $ = require("$");
  require('./dist/handsontable');

  describe('handsontable', function() {
    it('should has handsontable method', function() {
      expect($.fn.handsontable).to.be.a('function');
      expect($.support.htmlMenuitem).to.be.a('boolean');
    });
  });

});
