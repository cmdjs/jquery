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
                url: 'https://raw.github.com/warpech/jquery-handsontable/v<%= pkg.version%>/dist/jquery.handsontable.full.js',
                name: 'handsontable.js'
            },
            css: {
                url: 'https://raw.github.com/warpech/jquery-handsontable/v<%= pkg.version%>/dist/jquery.handsontable.full.css',
                name: "handsontable.css"
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
