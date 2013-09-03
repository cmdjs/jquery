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
                            code.replace("require('jquery')", "require('$$')"),
                            "});"
                        ].join('\n');
                    }
                },
                url: 'https://raw.github.com/brianreavis/selectize.js/v<%= pkg.version%>/selectize.js',
                name: 'selectize.js'
            },
            css: {
                url: 'https://raw.github.com/brianreavis/selectize.js/v<%= pkg.version%>/selectize.css',
                name: "selectize.css"
            }
        }
    });

    grunt.loadTasks('../_tasks/download/tasks');
    grunt.registerTask('default', ['download']);
};
