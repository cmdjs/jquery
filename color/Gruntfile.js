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
          dest: 'src',
          header: [
            'define(function(require) {',
            'var jQuery = require("$");'
          ].join('\n'),
          footer: '});'
        },
        url: 'https://raw.github.com/jquery/jquery-color/<%= pkg.version %>/jquery.color.js',
        name: 'color.js'
      }
    }
  });

  require('../node_modules/grunt-spm-build/').init(grunt, {pkg: pkg});

  grunt.loadTasks('../node_modules/grunt-spm-build/tasks');
  grunt.loadTasks('../_tasks/download/tasks');

  grunt.registerTask('build', ['download', 'spm-build']);
};
