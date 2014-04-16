module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,

    download: {
      options: {
        dest: 'dist',
      },
      src: {
        options: {
          header: [
            'define("<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/color-debug", ["$-debug"], function(require) {',
            '  var jQuery = require("$-debug"); '
          ].join('\n'),
          footer: '});'
        },
        url: 'http://code.jquery.com/color/jquery.color-<%= pkg.version %>.js',
        name: 'color-debug.js'
      },
      min: {
        options: {
          header: [
            'define("<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/color", ["$"], function(require) {',
            '  var jQuery = require("$"); '
          ].join('\n'),
          footer: '});'
        },
        url: 'http://code.jquery.com/color/jquery.color-<%= pkg.version %>.min.js',
        name: 'color.js'
      }
    }
  });

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download']);

};
