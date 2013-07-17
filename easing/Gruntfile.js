module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,

    download: {
      options: {
        dest: 'dist'
      },
      src: {
        options: {
          header: [
            'define("<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/easing-debug", ["jquery-debug"], function(require) {',
            '  var jQuery = require("jquery-debug"); '
          ].join('\n'),
          footer: '});'
        },
        url: 'https://raw.github.com/danro/jquery-easing/master/jquery.easing.js',
        name: 'easing-debug.js'
      },
      min: {
        options: {
          header: [
            'define("<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/easing", ["jquery"], function(require) {',
            '  var jQuery = require("jquery"); '
          ].join('\n'),
          footer: '});'
        },
        url: 'https://raw.github.com/danro/jquery-easing/master/jquery.easing.min.js',
        name: 'easing.js'
      }
    }
  });

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download']);
};
