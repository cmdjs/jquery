module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,

    download: {
      options: {
        dest: 'src'
      },
      widget: {
        options: {
          transform: function(code) {
            return code.replace(' && define.amd', '');
          }
        },
        url: 'https://raw.github.com/blueimp/jQuery-File-Upload/<%= pkg.version %>/js/vendor/jquery.ui.widget.js',
        name: 'jquery.ui.widget.js'
      },
      fileupload: {
        options: {
          transform: function(code) {
            code = code.replace(' && define.amd', '');
            code = code.replace('jquery.ui.widget', './jquery.ui.widget');
            return code;
          }
        },
        url: 'https://raw.github.com/blueimp/jQuery-File-Upload/<%= pkg.version %>/js/jquery.fileupload.js',
        name: 'fileupload.js'
      },
      iframe: {
        options: {
          transform: function(code) {
            return code.replace(' && define.amd', '');
          }
        },
        url: 'https://raw.github.com/blueimp/jQuery-File-Upload/<%= pkg.version %>/js/jquery.iframe-transport.js',
        name: 'iframe-transport.js'
      }
    }
  });

  grunt.loadGlobalTasks('spm-build');
  grunt.util._.merge(grunt.config.data, require('spm-build').config);

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download', 'spm-build']);

};
