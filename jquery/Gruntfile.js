module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  function repl(code, filename) {
    var id = pkg.family + '/' + pkg.name + '/' + pkg.version + '/' + filename;
    code = code.replace(/&&\s*define\.amd\s*/, '');
    code = code.replace(/define\(\s*"jquery/, 'define("' + id);
    code = code + '\n;$.noConflict();\n';
    return code;
  }

  grunt.initConfig({
    pkg: pkg,

    download: {
      options: {
        dest: 'dist',
      },
      src: {
        options: {
          transform: function(code) {
            return repl(code, 'jquery-debug');
          }
        },
        url: 'http://code.jquery.com/jquery-<%= pkg.version %>.js',
        name: 'jquery-debug.js'
      },
      min: {
        options: {
          transform: function(code) {
            return repl(code, 'jquery');
          }
        },
        url: 'http://code.jquery.com/jquery-<%= pkg.version %>.min.js',
        name: 'jquery.js'
      }
    }
  });

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download']);
};
