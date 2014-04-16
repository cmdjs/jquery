define(function(require) {

  var $ = require("$");
  var Treetable = require('./dist/treetable');

  describe('Treetable', function() {
    it('should has treetable method', function() {
      expect($.fn.treetable).to.be.a('function');
      expect(Treetable.Tree).to.be.a('function');
    });
  });
});
