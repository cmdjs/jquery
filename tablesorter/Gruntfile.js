module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  var prefix = '<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>';

  var download = {
    options: {
      dest: 'src'
    }
  };
  var files = [
    'metadata',
    'tablesorter',
    'tablesorter.widgets-filter-formatter',
    'tablesorter.widgets'
  ];
  for (var file in files) {
    var filename = files[file].split('.').pop();
    download[filename] = {
      options: {
        header: [
          'define(function(require) {',
          '  var jQuery = require("$");'
        ].join('\n'),
        footer: '});'
      },
      url: 'https://raw.github.com/Mottie/tablesorter/v<%= pkg.version %>/js/jquery.' + files[file] + '.js',
      name: filename + '.js'
    };
  }

  grunt.initConfig({
    pkg: pkg,

    prefix: '<%= pkg.family %>/<%= pkg.name %>/<%= pkg.version %>',

    download: download
  });

  require('../node_modules/grunt-spm-build/').init(grunt, {pkg: pkg});
  grunt.loadTasks('../node_modules/grunt-spm-build/tasks');
  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download', 'spm-build']);
};
