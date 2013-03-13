define(function(require) {

  describe('tablesorter', function() {
    it('should has no tablesorter method', function() {
      var $ = require('$');
      expect($.fn).to.not.have.property('tablesorter');
    });

    it('should has tablesorter method', function() {
      require('./dist/tablesorter');
      var $ = require('$');
      expect($.fn.tablesorter).to.be.a('function');
    });
  });

});
