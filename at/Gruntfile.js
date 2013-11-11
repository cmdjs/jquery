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
                            "require('jquery/caret/0.0.3/caret');",
                            "var jQuery = require('$');",
                            code.replace('window.jQuery', 'jQuery'),
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ichord/At.js/v<%= pkg.version%>/src/jquery.atwho.js',
                name: 'atwho.js'
            },
            css: {
                options: {
                    transform: function(code) {
                        return [
                            code
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ichord/At.js/v<%= pkg.version%>/src/jquery.atwho.css',
                name: 'atwho.css'
            }
        }
    });

  var config = require('spm-build').config;
  grunt.loadGlobalTasks('spm-build');
  grunt.util._.merge(grunt.config.data, config);

  grunt.loadTasks('../_tasks/download/tasks');
  grunt.registerTask('build', ['download', 'spm-build']);
};
