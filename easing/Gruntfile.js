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
                            "define(function(require, exports, module) {",
                            "var jQuery = require('$');",
                            code,
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/danro/jquery-easing/master/jquery.easing.js',
                name: 'easing.js'
            }
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);

};
