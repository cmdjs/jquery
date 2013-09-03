module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,

        download: {
            options: {
                dest: 'src'
            },
            highcharts: {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            'var previousJQuery = this.jQuery;',
                            "this.jQuery = require('$');",
                            code,
                            "module.exports = window.Highcharts;",
                            "this.jQuery = previousJQuery;",
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/highslide-software/highcharts.com/v<%= pkg.version%>/js/highcharts.src.js',
                name: 'highcharts.js'
            },
            highstock: {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            'var previousJQuery = this.jQuery;',
                            "this.jQuery = require('$');",
                            code,
                            "module.exports = window.Highcharts;",
                            "this.jQuery = previousJQuery;",
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/highslide-software/highcharts.com/v<%= pkg.version%>/js/highstock.src.js',
                name: 'highstock.js'
            },
            "highcharts-more": {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            code,
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/highslide-software/highcharts.com/v<%= pkg.version%>/js/highcharts-more.src.js',
                name: 'highcharts-more.js'
            },
            exporting: {
                options: {
                    transform: function(code) {
                        return [
                            'define(function(require, exports, module) {',
                            code,
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/highslide-software/highcharts.com/v<%= pkg.version%>/js/modules/exporting.src.js',
                name: 'exporting.js'
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
