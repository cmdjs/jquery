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
                            "module.exports = this.TreeTable;",
                            "this.jQuery = previousJQuery;",
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/javascripts/src/jquery.treetable.js',
                name: 'treetable.js'
            },
            css1: {
                options: {
                    transform: function(code) {
                        return code.replace(/\.\.\/images\//g, './');
                    }
                },
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/stylesheets/jquery.treetable.theme.default.css',
                name: "treetable.theme.default.css"
            },
            css2: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/stylesheets/jquery.treetable.css',
                name: "treetable.css"
            }
        }
    });

    grunt.loadGlobalTasks('spm-build');
    grunt.util._.merge(grunt.config.data, require('spm-build').config);

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download', 'spm-build']);

};
