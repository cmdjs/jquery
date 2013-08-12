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
                            code.replace('﻿', ''),  // 第一个字符是个不可见字符要替换掉
                            "module.exports = window.Select2;",
                            "this.jQuery = previousJQuery;",
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ivaynberg/select2/<%= pkg.version%>/select2.js',
                name: 'select2.js'
            },
            css: {
                url: 'https://raw.github.com/ivaynberg/select2/<%= pkg.version%>/select2.css',
                name: "select2.css"
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
