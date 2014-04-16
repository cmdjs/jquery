module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,

        download: {
            options: {
                dest: 'src'
            },
            js: {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            "var jQuery = require('$');",
                            code.replace('window.jQuery', 'jQuery'),
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ichord/Caret.js/v<%= pkg.version%>/src/jquery.caret.js',
                name: 'caret.js'
            }
        }
    });

  var config = require('spm-build').config;
  grunt.loadGlobalTasks('spm-build');
  grunt.util._.merge(grunt.config.data, config);

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download', 'spm-build']);
};
