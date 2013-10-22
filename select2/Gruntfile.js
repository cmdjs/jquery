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
                            code.replace('﻿', ''),  // 第一个字符是个不可见字符要替换掉
                            "module.exports = window.Select2;",
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ivaynberg/select2/<%= pkg.version%>/select2.js',
                name: 'select2.js'
            },
            lang: {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            "var jQuery = require('$');",
                            "var select2 = require('./select2');",
                            code.replace('﻿', ''),
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/ivaynberg/select2/<%= pkg.version%>/select2_locale_zh-CN.js',
                name: 'select2-zh-cn.js'
            },
            css: {
                options: {
                    transform: function(code) {
                        code = code.replace(/select2\.png/g, "https://i.alipayobjects.com/e/201310/1JC9IarS8D.png");
                        code = code.replace(/select2-spinner\.gif/g, "https://i.alipayobjects.com/e/201310/1JCGcxNz9Z.gif");
                        code = code.replace(/select2x2\.png/g, "https://i.alipayobjects.com/e/201310/1JCHRnbuYf.png");

                        return code
                    }
                },
                url: 'https://raw.github.com/ivaynberg/select2/<%= pkg.version%>/select2.css',
                name: "select2.css"
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
