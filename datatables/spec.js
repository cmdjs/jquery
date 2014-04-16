define(function(require) {

  describe('datatables', function() {
    it('should has dataTable method', function() {
      var $ = require('$');
      require('./dist/datatables');
      expect($.fn.dataTable).to.be.a('function');
    });
  });

});
