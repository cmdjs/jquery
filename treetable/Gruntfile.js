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
            },
            images1: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/bg-table-thead.png',
                name: 'bg-table-thead.png'
            },
            images2: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/collapse-light.png',
                name: 'collapse-light.png'
            },
            images3: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/collapse.png',
                name: 'collapse.png'
            },
            images4: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/expand-light.png',
                name: 'expand-light.png'
            },
            images5: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/expand.png',
                name: 'expand.png'
            },
            images6: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/file.png',
                name: 'file.png'
            },
            images7: {
                url: 'https://raw.github.com/ludo/jquery-treetable/<%= pkg.version%>/images/folder.png',
                name: 'folder.png'
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
