define(function(require) {

  describe('datatables', function() {
    it('should has dataTable method', function() {
      require('./dist/datatables');
      var $ = require('$');
      expect($.fn.dataTable).to.be.a('function');
    });
  });

});
