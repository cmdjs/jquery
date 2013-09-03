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
                            'var previousJQuery = this.jQuery;',
                            "this.jQuery = require('$');",
                            code,
                            "this.jQuery = previousJQuery;",
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

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
