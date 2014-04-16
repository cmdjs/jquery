define(function(require) {

  var $ = require("$");
  require('./dist/fileupload');
  require('./dist/iframe-transport');

  describe('fileupload', function() {
    it('should has some methods', function() {
      expect($.widget).to.be.a('function');
      expect($.fn.fileupload).to.be.a('function');
    });
  });

});
