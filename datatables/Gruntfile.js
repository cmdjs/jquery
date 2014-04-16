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
            'define("<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/datatables-debug", ["$-debug"], function(require) {',
            '  var jQuery = require("$-debug"); '
          ].join('\n'),
          footer: '});'
        },
        url: 'http://ajax.aspnetcdn.com/ajax/jquery.dataTables/<%= pkg.version %>/jquery.dataTables.js',
        name: 'datatables-debug.js'
      },
      min: {
        options: {
          header: [
            'define("<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>/datatables", ["$"], function(require) {',
            '  var jQuery = require("$"); '
          ].join('\n'),
          footer: '});'
        },
        url: 'http://ajax.aspnetcdn.com/ajax/jquery.dataTables/<%= pkg.version %>/jquery.dataTables.min.js',
        name: 'datatables.js'
      }
    }
  });

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download']);

};
