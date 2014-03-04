module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,

        download: {
            options: {
                dest: 'src'
            },
            tablesorter: {
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
                url: 'https://raw.github.com/Mottie/tablesorter/v<%= pkg.version%>/js/jquery.tablesorter.js',
                name: 'tablesorter.js'
            },
            widgets: {
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
                url: 'https://raw.github.com/Mottie/tablesorter/v<%= pkg.version%>/js/jquery.tablesorter.widgets.js',
                name: 'widgets.js'
            },
            metadata: {
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
                url: 'https://raw.github.com/Mottie/tablesorter/v<%= pkg.version%>/js/jquery.metadata.js',
                name: 'metadata.js'
            },
            formatter: {
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
                url: 'https://raw.github.com/Mottie/tablesorter/v<%= pkg.version%>/js/jquery.tablesorter.widgets-filter-formatter.js',
                name: 'widgets-filter-formatter.js'
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('build', ['download']);
};
