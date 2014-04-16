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
                            "require('caret');",
                            "var jQuery = require('$');",
                            code.replace('window.jQuery', 'jQuery'),
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ichord/At.js/v<%= pkg.version%>/dist/js/jquery.atwho.js',
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
                url: 'https://raw.github.com/ichord/At.js/v<%= pkg.version%>/dist/css/jquery.atwho.css',
                name: 'atwho.css'
            }
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);

};
