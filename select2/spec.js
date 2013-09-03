define(function(require) {

  var $ = require("$");
  var Select2 = require('./src/select2');

  describe('select2', function() {
    it('should has select2 method', function() {
      expect($.fn.handsontable).to.be.a('function');
      expect(Select2.query).to.be.a('object');
    });
  });

});
