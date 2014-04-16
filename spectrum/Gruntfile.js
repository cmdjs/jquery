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
                            code,
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/bgrins/spectrum/<%= pkg.version%>/spectrum.js',
                name: 'spectrum.js'
            },
            css: {
                options: {
                    transform: function(code) {
                        return code.replace(/\.\.\/images\//g, './');
                    }
                },
                url: 'https://raw.github.com/bgrins/spectrum/<%= pkg.version%>/spectrum.css',
                name: "spectrum.css"
            }
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);

};
